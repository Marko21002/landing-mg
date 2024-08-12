"use client";
import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    <div className="max-w-lg w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://media.giphy.com/media/Y5ytdl4PXziZW/giphy.gif?cid=ecf05e47wruazse5qkydkeq9ar74oevs50c2ls9v1e7vg6f2&ep=v1_gifs_search&rid=giphy.gif&ct=g)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media.giphy.com/media/ayOAlaM07rqRG/giphy.gif?cid=ecf05e47q4sxu42he8u1drtm552y9k5gqmpp5824tu0gswek&ep=v1_gifs_search&rid=giphy.gif&ct=g)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative"></h1>
          {/* <p className="font-normal text-base text-gray-50 relative my-4">
            This card is for some special elements, like displaying background
            gifs on hover only.
          </p> */}
        </div>
      </div>
    </div>
  );
}
