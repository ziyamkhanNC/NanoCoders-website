import React from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

function Events() {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-16 mb-30" id="events">
      <div className="flex flex-col justify-center items-center gap-5 pb-20">
        <h1 className="text-[#f2bf11] text-center font-medium capitalize">
          – OUR EVENTS –
        </h1>
        <h2 className="text-[#5bb5ea] text-3xl md:text-5xl font-bold text-center">
          Explore Our <span className="text-[#f2bf11]">Events</span>{" "}
          <span className="text-[#132c56]">Programs</span>
        </h2>
        <p className="text-[#132c56]/70 font-medium text-center max-w-xl">
          Discover thoughtfully curated events focused on learning,
          collaboration, and real world impact.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm tracking-widest text-[#f2bf11] font-medium">
            EVENTS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#132c56] mt-4">
            Join Our Upcoming <span className="text-[#5bb5ea]">Events</span>
          </h2>
          <p className="text-[#132c56]/70 font-medium mt-4 max-w-lg">
            Discover workshops, meetups, and tech talks designed to help you
            grow and connect with our community.
          </p>
          <p className="text-[#132c56]/70 font-medium mt-3 max-w-lg">
            Learn from industry professionals and collaborate with like minded
            innovators.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4 items-center pb-6 border-b border-[#d6d3e3]">
              <CalendarDays className="text-[#5bb5ea]" />
              <p className="text-[#132c56]/70">New events every month</p>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin className="text-[#5bb5ea]" />
              <p className="text-[#132c56]/70">Online and on site sessions</p>
            </div>
          </div>
        </div>

        {/* RIGHT EVENTS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              type: "Workshop",
              title: "Frontend Mastery Bootcamp",
              desc: "Build modern UIs with React and Tailwind.",
            },
            {
              type: "Meetup",
              title: "AI Web Future Talk",
              desc: "Explore how AI is reshaping web development",
            },
            {
              type: "Webinar",
              title: "Freelancing Growth Strategy",
              desc: "Learn how to scale your freelance career",
            },
            {
              type: "Hackathon",
              title: "Code for Impact",
              desc: "Solve real problems with team coding",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-[#f7f7fb] rounded-[26px] p-6 border border-[#5bb5ea]/20 
              shadow-[0_12px_35px_rgba(91,181,234,0.18)]
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-[0_22px_55px_rgba(91,181,234,0.35)]"
            >
              <p className="text-sm text-[#f2bf11] font-semibold mb-2">
                {event.type}
              </p>
              <h3 className="text-xl font-bold text-[#132c56] mb-2">
                {event.title}
              </h3>
              <p className="text-[#132c56]/65 text-sm mb-4">{event.desc}</p>
              <button className="flex items-center gap-2 text-[#5bb5ea] font-medium group">
                Learn more
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
