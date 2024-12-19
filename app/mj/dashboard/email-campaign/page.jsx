"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Company() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null); // For storing the statistics
  const itemsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      router.push("/mj/login");
    }

    const fetchCompanies = async () => {
      setLoading(true);
      const response = await fetch(
        `https://6764024217ec5852caead03d.mockapi.io/company?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      if (data.length == 0) {
        setNoMoreData(true);
      } else {
        setCompanies(data);
        setNoMoreData(false);
      }
      setLoading(false);
    };

    fetchCompanies();
  }, [currentPage, router]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 1) return `${diffInDays} days ago`;
    if (diffInDays === 1) return "1 day ago";
    if (diffInHours > 1) return `${diffInHours} hours ago`;
    if (diffInMinutes > 1) return `${diffInMinutes} minutes ago`;
    return `${diffInSeconds} seconds ago`;
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this record?");
    if (confirmed) {
      await fetch(`https://6764024217ec5852caead03d.mockapi.io/company/${id}`, {
        method: "DELETE",
      });
      setCompanies(companies.filter((company) => company.id !== id));
    }
  };

  // Function to fetch stats
  const fetchStats = async () => {
    const response = await fetch("https://6764024217ec5852caead03d.mockapi.io/company");
    const data = await response.json();

    let openedToday = 0;
    let openedYesterday = 0;
    let openedThisMonth = 0;
    let openedLastMonth = 0;
    let notOpened = 0;

    const now = new Date();

    data.forEach((item) => {
      if (item.emailOpened) {
        const emailedOpenedDate = new Date(item.emailedOpenedOn);
        if (emailedOpenedDate.toDateString() === now.toDateString()) {
          openedToday++;
        } else if (
          new Date(emailedOpenedDate.setDate(emailedOpenedDate.getDate() - 1)).toDateString() === now.toDateString()
        ) {
          openedYesterday++;
        } else if (emailedOpenedDate.getMonth() === now.getMonth()) {
          openedThisMonth++;
        } else if (emailedOpenedDate.getMonth() === now.getMonth() - 1) {
          openedLastMonth++;
        }
      } else {
        notOpened++;
      }
    });

    setStats({
      openedToday,
      openedYesterday,
      openedThisMonth,
      openedLastMonth,
      notOpened,
      totalEmails: data.length,
    });
  };

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-bold mb-4">Email Campaign Data</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8"></div>
        </div>
      ) : (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Website</th>
              <th className="px-4 py-2 border">Email Opened</th>
              <th className="px-4 py-2 border">Date Created</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {(companies.length > 0 && !noMoreData) ? (
              companies.map((company) => (
                <tr key={company.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{company.id}</td>
                  <td className="px-4 py-2">{company.name}</td>
                  <td className="px-4 py-2">{company.email}</td>
                  <td className="px-4 py-2">{company.website}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-center">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          company.emailOpened ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{timeAgo(company.createdAt)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-red-500">
                  No more data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage <= 1 ? "bg-gray-300 text-gray-600" : "bg-black text-white"
          }`}
        >
          Previous
        </button>
        <span className="mx-4">{currentPage}</span>
        <button
          disabled={noMoreData}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-md ${
            noMoreData ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>

      {/* Button to fetch and show stats */}
      <div className="mt-6">
        <button
          onClick={fetchStats}
          className="px-6 py-3 bottom-0 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Show Email Stats
        </button>
      </div>

      {/* Display Stats */}
      {stats && (
        <table className="mt-6 min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border">Total Emails send</th>
              <th className="px-4 py-2 border">Not Opened</th>
              <th className="px-4 py-2 border">Opened Today</th>
              <th className="px-4 py-2 border">Opened Yesterday</th>
              <th className="px-4 py-2 border">Opened This Month</th>
              <th className="px-4 py-2 border">Opened Last Month</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">{stats.totalEmails}</td>
              <td className="px-4 py-2">{stats.notOpened}</td>
              <td className="px-4 py-2">{stats.openedToday}</td>
              <td className="px-4 py-2">{stats.openedYesterday}</td>
              <td className="px-4 py-2">{stats.openedThisMonth}</td>
              <td className="px-4 py-2">{stats.openedLastMonth}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
