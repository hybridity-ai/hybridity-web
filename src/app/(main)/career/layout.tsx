export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex justify-center px-8 md:p-8">
        <div className="grow max-w-7xl">{children}</div>
      </div>
    </main>
  )
}
