export default function AboutMe() {
    const topSkills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
    
    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600">
                    Write a brief introduction about yourself here.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Top Skills</h2>
                <ul className="list-disc pl-6">
                    {
                    topSkills.map((skill, index) => (
                        <li key={index}
                            className="text-gray-600">
                            {skill} </li>
                    ))
                } </ul>
            </div>
        </section>
    )
}
