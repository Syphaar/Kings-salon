// import Img from "/src/assets/img/trimming.jpg";

const Heading = [
    {
        id:1, 
        text: "Pictures",
    },
];

const Images = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297984/trimming_qvkeuh.jpg",
    },
    {
        id: 2,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297980/shaving_tudxxw.jpg",
    },
    {
        id: 3,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297965/facial_w7bbj9.jpg",
    },
    {
        id: 4,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297973/haircut_hkxub0.jpg",
    },
    {
        id: 5,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297779/beards_qtnim9.jpg",
    },
    {
        id: 6,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297960/clipper-two_kokl1j.jpg",
    },
    {
        id: 7,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297983/trim_b39oeb.jpg",
    },
    {
        id: 8,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297967/friction_t7rnzu.jpg",
    },
];

const Pictures = () => {
  return (
    <section>
        <div className="pb-10 px-7 py-12 md:px-10 lg:px-16 xl:px-20 xl:pb-20">
            <div data-aos="zoom-in">
                {Heading.map((header) => (
                    <div key={header.id} className='pb-4'>
                        <div className='text-center'>
                            <h3 className='text-3xl font-bold uppercase pb-2'>{header.text}</h3>
                            <p className=''>{header.subhead}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Images.map((pic) => (
                    <div key={pic.id}>
                        <div>
                            <img src={pic.picture} alt="" className="rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Pictures;
