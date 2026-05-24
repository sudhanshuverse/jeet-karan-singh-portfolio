import Card from "./ui/Card";

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card delay={0.1}>
                    <h3 className="text-2xl text-white font-bold">MBBS</h3>
                    <p className="text-[#38BDF8] mt-2">Himalayan Institute of Medical Sciences</p>
                </Card>
                <Card delay={0.2}>
                    <h3 className="text-2xl text-white font-bold">12th Grade</h3>
                    <p className="text-[#38BDF8] mt-2">The Asian School</p>
                </Card>
            </div>
        </section>
    );
}