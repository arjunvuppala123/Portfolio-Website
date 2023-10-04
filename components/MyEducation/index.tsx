export default function MyEducation() {
    const educationData = [
        {
            period: '2019-2023',
            degree: 'Bachelor of Science in Computer Science',
            school: 'PES University',
        },
        {
            period: '2018-2019',
            degree: '12th Standard',
            school: 'Delhi Public School Bangalore East',
        },
        {
            period: '2017-2018',
            degree: '10th Standard',
            school: 'Delhi Public School Bangalore East',
        },
    ]

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <ul className="list-disc pl-6">
                    {educationData.map((item, index) => (
                        <li key={index} className="text-gray-600 mb-4">
                            <div>
                                <strong>{item.period}</strong>
                            </div>
                            <div>{item.degree}</div>
                            <div>{item.school}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}