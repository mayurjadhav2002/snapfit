import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

async function handleSubscribe(formData) {
    "use server";

  const email = formData.get('email');

  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
  console.log('Subscribing:', email);

  // await fetch('https://example.com/api/subscribe', {
  //   method: 'POST',
  //   body: JSON.stringify({ email }),
  // });

  revalidatePath('/subscribe');

  redirect('/thank-you'); 
}

export default function SubscribePage() {
  return (
    <div className="relative mt-8">
      <form action={handleSubscribe} method="POST" className="relative">
        <input
          type="email"
          name="email"
          className="w-full py-2.5 px-5 h-14 border border-gray-300 bg-white shadow-sm rounded-full text-md text-indigo-500 focus:outline-none placeholder:text-indigo-400 pr-16"
          placeholder="Enter your email address ..."
          required
        />
        <button
          type="submit"
          className="absolute right-1 active:scale-105 active:transition-all active:duration-200 top-1/2 transform -translate-y-1/2 h-auto py-3 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
