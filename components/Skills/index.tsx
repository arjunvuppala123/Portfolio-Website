export default function Skills() {
    const skills = [
        'Web Development',
        'JavaScript',
        'React.js',
        'Node.js',
        'HTML/CSS',
        'TypeScript',
        'UI/UX Design'
    ]

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                    skills.map((skill, index) => (
                        <div key={index}
                            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                            <p className="text-lg font-semibold">
                                {skill}</p>
                        </div>
                    ))
                } </div>
            </div>
        </section>
    )
}
