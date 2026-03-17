import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <nav className="p-6 flex justify-between items-center border-b dark:border-zinc-800">
        <span className="font-bold text-xl">Portfolio.</span>
        <ThemeToggle />
      </nav>
      
      <section className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-5xl font-extrabold mb-4">Hello, I'm a Developer</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          This content changes color based on the theme!
        </p>
      </section>
    </main>
  )
}