import React from "react";

interface BadgeProps {
    imageUrl: string;
    linkUrl: string;
    altText: string;
}

const badgesData: BadgeProps[] = [
    {
        imageUrl: "/badges/dundeezhang.gif",
        linkUrl: "https://dundeezha.ng",
        altText: "dundeezhang",
    },
    {
        imageUrl: "/badges/zerotiger.gif",
        linkUrl: "https://zerotiger.ca",
        altText: "zerotiger",
    },
    {
        imageUrl: "/badges/amandaxi.gif",
        linkUrl: "https://amandaxi.ca",
        altText: "amandaxi",
    },
    {
        imageUrl: "/badges/hyperneutrino.png",
        linkUrl: "https://hyperneutrino.xyz",
        altText: "hyperneutrino",
    },
    {
        imageUrl: "/badges/s23adhik.png",
        linkUrl: "https://csclub.uwaterloo.ca/~s23adhik/",
        altText: "s23adhik",
    },
    // Add more badges here
];

const Badges: React.FC = () => {
    return (
        <div style={{ marginBottom: "12vh" }}>
            <p>Here are badges of a few friends' websites!</p>
            <div
                className="badge-container"
                style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center",
                    marginTop: "16px",
                    flexWrap: "wrap",
                }}
            >
                {badgesData.map((badge, index) => (
                    <a
                        href={badge.linkUrl}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={badge.imageUrl}
                            alt={badge.altText}
                            width="88"
                            height="31"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Badges;
