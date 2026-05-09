const features = [
    {
        title: '01',
        service:'Architecture',
        description: 'Concept through planning approval. Residential, commercial & civic.'
    },
     {
        title: '02',
        service:'Design-Build',
        description: 'Full delivery. Architect-led from first sketch to final key.'
    },
     {
        title: '03',
        service:'Interiors',
        description: 'Interior architecture, material spec & FF&E procurement.'
    },
     {
        title: '04',
        service:'Masterplanning',
        description: 'Urban strategy, estate layout & phased development.'
    }
]

const Services = () =>{
    return(<>
        <div className="bg-[#0a0a0a] px-10 py-10">
            <div className="pb-8">
                <h4 className="text-[#C4622D] text-sm font-serif mb-2">What We Do</h4>
                <span className="flex items-center justify-between border-b border-[#bfa37e]/20 pb-4">
                  <h1 className="text-white text-3xl font-sans">Our Services</h1>
                  <h5 className="text-gray-700 text-sm">04 disciplines</h5>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer transition-all duration-300 md:gap-0 gap-5">
                 {features.map((feature, index) => (
                    <div key={index} className="bg-[#111111] border border-[#bfa37e]/10 p-6 transition-colors hover:border-[#bfa37e]/40">
                        <h1 className="text-[#C4622D] text-2xl font-serif mb-8">{feature.title}</h1>
                        <h2 className="text-white text-lg mb-3">{feature.service}</h2>
                        <h3 className="text-gray-400 text-sm leading-relaxed">{feature.description}</h3>
                    </div>
                 ))}
            </div>
        </div>
    
    </>)
}
export default Services