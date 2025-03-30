import React from "react";
import { useMediaQuery } from "react-responsive";

import uwcsWrBlack from "/icons/blackuwcswebring.svg";
import uwcsWrWhite from "/icons/uwcscwebring.svg";

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
    const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
    return (
        <div style={{ marginBottom: "12vh" }}>
            <p>UWaterloo CS Webring:</p>
            <div className="webring-div" style={{ marginTop: "2vh" }}>
                <a
                    className="cs-webring-links"
                    href="https://cs.uwatering.com/#https://dundeezhang.com?nav=prev"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <a
                    href="https://cs.uwatering.com/#https://dundeezhang.com"
                    target="_blank"
                >
                    <img
                        src={isDarkMode ? uwcsWrWhite : uwcsWrBlack}
                        alt="UWaterloo CS Web Ring"
                        className="cs-webring"
                    />
                </a>
                <a
                    className="cs-webring-links"
                    href="https://cs.uwatering.com/#https://dundeezhang.com?nav=next"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <p>Here's my badge and a few of my friends' badges!</p>
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
