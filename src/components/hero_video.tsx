"use client";

import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import brainVideo from '../../public/assets/Brain_transformation.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const handleLoaded = () => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            tl.to(video, {
                currentTime: video.duration,
                ease: "none",
            });

            // tl.from(
            //     ".title",
            //     {
            //         opacity: 0,
            //         y: 50,
            //     },
            //     0.8
            // );
            //
            // tl.from(
            //     ".convite",
            //     {
            //         opacity: 0,
            //     },
            //     0.9
            // );
        };

        video.addEventListener(
            "loadedmetadata",
            handleLoaded
        );

        return () => {
            video.removeEventListener(
                "loadedmetadata",
                handleLoaded
            );
        };
    }, []);

    return (
        <section ref={heroRef} className="video-scroll-container">
            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
            >
                <source
                    src={brainVideo}
                    type="video/mp4"
                />
            </video>
        </section>
    );
}