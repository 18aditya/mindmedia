import Image from "next/image";

const partners = [
    { name: "Six Senses", url: "https://www.sixsenses.com/en", image: "/images/partners/six-senses.webp" },
    { name: "Regent", url: "https://www.ihg.com/regent/hotels/gb/en/reservation", image: "/images/partners/regent.webp" },
    { name: "InterContinental", url: "https://www.ihg.com/intercontinental/hotels/gb/en/reservation", image: "/images/partners/intercontinental.webp" },
    { name: "Vignette Collection", url: "https://www.ihg.com/vignettecollection/hotels/gb/en/reservation", image: "/images/partners/vignette.webp" },
    { name: "Kimpton", url: "https://www.ihg.com/kimptonhotels/hotels/us/en/reservation", image: "/images/partners/kimpton.webp" },
    { name: "Hotel Indigo", url: "https://www.ihg.com/hotelindigo/hotels/gb/en/reservation", image: "/images/partners/hotel-indigo.png" },
    { name: "Voco", url: "https://www.ihg.com/voco/hotels/gb/en/reservation", image: "/images/partners/voco.webp" },
    { name: "Hualuxe", url: "https://www.ihg.com/hualuxe/hotels/gb/en/reservation", image: "/images/partners/hualuxe.webp" },
    { name: "Crowne Plaza", url: "https://www.ihg.com/crowneplaza/hotels/gb/en/reservation", image: "/images/partners/crowne-plaza.webp" },
    { name: "Iberostar", url: "https://www.ihg.com/content/us/en/iberostar-beachfront-resorts", image: "/images/partners/iberostar.webp" },
    { name: "Even Hotels", url: "https://www.ihg.com/evenhotels/hotels/us/en/reservation", image: "/images/partners/even-hotels.webp" },
    { name: "Holiday Inn Express", url: "https://www.ihg.com/holidayinnexpress/hotels/gb/en/reservation", image: "/images/partners/holiday-inn-express.webp" },
    { name: "Holiday Inn", url: "https://www.ihg.com/holidayinn/hotels/gb/en/reservation", image: "/images/partners/holiday-inn.webp" },
    { name: "Garner", url: "https://www.ihg.com/garnerhotels", image: "/images/partners/garner.webp" },
    { name: "Avid Hotels", url: "https://www.ihg.com/avidhotels/hotels/gb/en/reservation", image: "/images/partners/avid-hotels.webp" },
    { name: "Atwell Suites", url: "https://www.ihg.com/atwellsuites/hotels/gb/en/reservation", image: "/images/partners/atwell-suites.webp" },
    { name: "Staybridge Suites", url: "https://www.ihg.com/staybridge/hotels/gb/en/reservation", image: "/images/partners/staybridge.webp" },
    { name: "Holiday Inn Club Vacations", url: "https://www.ihg.com/holidayinnclubvacations/hotels/us/en/reservation", image: "/images/partners/holiday-inn-club.webp" },
    { name: "Candlewood Suites", url: "https://www.ihg.com/candlewood/hotels/us/en/reservation", image: "/images/partners/candlewood.webp" }
];

export default function Partners() {
    return (
        <div className="bg-white py-[3rem] sm:py-[6rem] px-[20px] sm:px-0">
            <div className="relative container sm:mx-auto border-[1px] py-[4rem] sm:py-[6rem] px-[3rem] border-body flex flex-wrap justify-around sm:justify-center items-center gap-5 lg:gap-7 xl:gap-9">
                <a 
                    href="https://www.ihg.com/hotels/gb/en/reservation" 
                    target="_blank" 
                    className="bg-white absolute -top-[15px] left-[30px] sm:left-[70px] px-[10px]"
                >
                    <Image
                        src="/images/partners/ihg-logo.avif"
                        alt="IHG Logo"
                        width={200}
                        height={33}
                        className="w-[150px] sm:w-[180px]"
                    />
                </a>
                <a 
                    href="https://www.ihg.com/onerewards/content/gb/en/home" 
                    target="_blank" 
                    className="bg-white absolute -bottom-[15px] right-[30px] sm:right-[70px] px-[10px]"
                >
                    <Image
                        src="/images/partners/ihg-rewards-black.avif"
                        alt="IHG Rewards"
                        width={200}
                        height={40}
                        className="w-[170px] sm:w-[200px]"
                    />
                </a>
                {partners.map((partner, index) => (
                    <a 
                        key={index}
                        target="_blank" 
                        href={partner.url}
                    >
                        <Image
                            src={partner.image}
                            alt={`${partner.name} Logo`}
                            width={100}
                            height={100}
                            className="w-[100px] sm:w-[100px] object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}