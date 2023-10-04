export default function MyProjects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1.',
            link: 'https://github.com/yourusername/project1'
        }, {
            title: 'Project 2',
            description: 'Description of Project 2.',
            link: 'https://github.com/yourusername/project2'
        },
        // Add more project entries as needed
    ]

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                    projects.map((project, index) => (
                        <div key={index}
                            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold">
                                {
                                project.title
                            }</h3>
                            <p className="text-gray-600">
                                {
                                project.description
                            }</p>
                            <a href={
                                    project.link
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-2 inline-block">
                                View on GitHub
                            </a>
                        </div>
                    ))
                } </div>
            </div>
        </section>
    )
}
