"use client";

export default function BookingButton({ text = "Book Consultation" }: { text?: string }) {
    // Replace this URL with the one you copied from Google Calendar
    const googleBookingUrl = "https://calendar.app.google/your-unique-link";

    return (
        <a
            href={googleBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-sky-600 text-white font-sans text-sm tracking-widest uppercase hover:bg-slate-900 transition-all duration-500 rounded-sm shadow-lg hover:shadow-sky-600/20"
        >
            {text}
        </a>
    );
}