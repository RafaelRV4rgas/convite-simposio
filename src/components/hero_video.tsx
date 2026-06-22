"use client";

import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.addEventListener("loadedmetadata", () => {
            console.log("metadata", video.duration);
        });

        video.addEventListener("canplay", () => {
            console.log("canplay");
        });

        video.addEventListener("canplaythrough", () => {
            console.log("canplaythrough");
        });

        video.addEventListener("error", (e) => {
            console.log("video error", e);
        });

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
            "canplay",
            handleLoaded
        );

        // Safari/iOS may not start buffering aggressively when the
        // video is only scrubbed through currentTime.
        // Force loading so canplay/canplaythrough are reached.
        video.load();

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
                // controls
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                // style={{
                //     width: "300px",
                //     height: "auto"
                //}}
            >
                <source
                    src={`${import.meta.env.BASE_URL}assets/Brain_transformation_scroll.mp4`}
                    type="video/mp4"
                />
            </video>
        </section>
    );
}

// ffmpeg -i Brain_transformation.mp4 \
// -c:v libx264 \
// -pix_fmt yuv420p \
// -g 30 \
// -keyint_min 30 \
// -movflags +faststart \
// -c:a aac \
// Brain_transformation_scroll.mp4

// ffmpeg -i Brain_transformation.mp4 \
// -an \
// -c:v libx264 \
// -pix_fmt yuv420p \
// -crf 18 \
// -g 15 \
// -keyint_min 15 \
// -movflags +faststart \
// Brain_transformation_scroll.mp4