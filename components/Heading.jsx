const Heading = ({title}) => {
  return (
    <section className="bg-background mb-5 shadow px-4 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
    </section>
  )
}

export default Heading