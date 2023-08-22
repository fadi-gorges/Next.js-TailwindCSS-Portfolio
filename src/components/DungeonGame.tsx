'use client'
import {Unity, useUnityContext} from "react-unity-webgl";
import React, {useEffect, useState} from "react";
import {ArrowsPointingOutIcon} from "@heroicons/react/24/outline";
import {isMobile} from "react-device-detect"

const DungeonGame = ({setModalOpen}: {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const {unityProvider, requestFullscreen, isLoaded, loadingProgression, unload} = useUnityContext({
        loaderUrl: "dungeon-build/Build/DungeonWeb.loader.js",
        dataUrl: "dungeon-build/Build/DungeonWeb.data",
        frameworkUrl: "dungeon-build/Build/DungeonWeb.framework.js",
        codeUrl: "dungeon-build/Build/DungeonWeb.wasm",
    })

    const [devicePixelRatio, setDevicePixelRatio] = useState(window.devicePixelRatio);

    useEffect(
        function () {
            const updateDevicePixelRatio = function () {
                setDevicePixelRatio(window.devicePixelRatio);
            };
            const mediaMatcher = window.matchMedia(
                `screen and (resolution: ${devicePixelRatio}dppx)`
            );
            mediaMatcher.addEventListener("change", updateDevicePixelRatio);
            return function () {
                mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
            };
        },
        [devicePixelRatio]
    );

    const handleModalClose = async () => {
        unload()
        setModalOpen(false)
    }

    return isMobile
        ? <dialog id="dungeon-modal" className="modal modal-open">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Dungeon of Death</h3>
                <div className="py-4">
                    Please play this game on a desktop computer.
                </div>
                <div className="modal-action">
                    <button onClick={handleModalClose} className="btn">Close</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleModalClose}/>
            </form>
        </dialog>
        : <dialog id="dungeon-modal" className="modal modal-open">
            <form method="dialog" className="modal-box max-w-screen-xl">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Dungeon of Death</h3>
                    {isLoaded && <button onClick={() => requestFullscreen(true)} className="btn btn-primary">
                        Fullscreen
                        <ArrowsPointingOutIcon className="w-6 h-6 ml-2"/>
                    </button>}
                </div>
                <div className="py-4">
                    <Unity unityProvider={unityProvider} devicePixelRatio={devicePixelRatio}
                           className={`w-full select-none ${isLoaded ? '' : 'hidden'}`}/>
                    <progress className={`progress progress-primary w-full ${isLoaded ? 'hidden' : ''}`}
                              value={loadingProgression} max="1"/>
                </div>
                <div className="modal-action">
                    <button onClick={handleModalClose} className="btn">Close</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleModalClose}/>
            </form>
        </dialog>
}

export default DungeonGame