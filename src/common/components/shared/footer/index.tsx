export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center px-4 pb-10 text-center text-gray-500 dark:bg-darkBg">
      <section className="max-w-[28rem]">
        <small className="mb-2 block text-xs">
          &copy; 2024 Maksym Azimov. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">
            How about we break the ice and start a conversation?
          </span>{" "}
          It&apos;s like adding sprinkles to the cake of life - makes everything
          more fun!
        </p>
      </section>
    </footer>
  );
}
