"use client"
import React from "react";
import Button from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import ProfileCardFrame from "./ProfileCardFrame";
import "./style.css";
import "../globals.css";
import Link from "next/link";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export default function AttorneyProfile() {
    return (
        <div className="attorney-profile">


            <div className="div">
            <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="image.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a0f4778bc2ea921ff37a51c93566e35f261f4c48bb16731c40739552fa70a71?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                    className="img-3"
                />
                <div className="div-7">
                    <div className="div-8">
                        <div className="div-9">
                            <div className="div-10">Ade Isa</div>
                            <div className="div-11">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca726241a7df1b23c2ff049490255ac3840faa7d4de51b7cec6c38966e5f5229?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-4"
                                />
                                <div className="div-12">4.5</div>
                                <div className="div-13">(2 reviews)</div>
                            </div>
                        </div>
                        <div className="div-14">Illinois, USA</div>
                    </div>
                    <div className="div-15">
                        <div className="div-16">Contact</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4627f4ef68191c12de6da18143bb2d6c9e482cf4e9159f083b24a0bf30432624?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-5"
                        />
                    </div>
                    <div className="div-17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                        iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
                        eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. At eget iaculis eget eget neque, posuere quis
                        placerat arcu.
                    </div>
                    <div className="div-18">Green card through employment</div>
                    <div className="div-19">Green card through family</div>
                    <div className="div-20">Reviews</div>
                    <div className="div-21">Habeeb Munir</div>
                    <div className="div-22">
                        <div className="div-23">
                            <div className="div-24">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b591a398627e14bb20229642acf2cd08ce2d4f9a9bd9c1e3dae8642a175e5c4?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-6"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97859986f581a8b4009281d26bd45dc3060cee22fd86e415c20e5648c804497?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-7"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f1d872909a00619723f27ed9b1b8a787062c372f4eb7a6026823e657f87be86?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-8"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ece7c11ea763b6ac6e8963557837f10f24f0cfb3a0ebe508d365b109637b94?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-9"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca25010495c4536730af91247f0ab148088f9cedce30041a14c0ca5606d681f2?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-10"
                                />
                            </div>
                            <div className="div-25">5</div>
                        </div>
                        <div className="div-26" />
                        <div className="div-27">1 week ago</div>
                    </div>
                    <div className="div-28">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                        iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
                        eget neque, posuere quis placerat arcu.{" "}
                    </div>
                    <div className="div-29">more reviews</div>
                </div>
                <div className="div-30">You may also be interested in</div>
                <div className="div-31">
                    <div className="div-32">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-11"
                        />
                        <div className="div-33">
                            <div className="div-34">
                                <div className="div-35">Agbaje Ade</div>
                                <div className="div-36">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d767aaf1cd0e7cb9fd9689664072413c377db1bcfad041f8d37034c968d3989?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                        className="img-12"
                                    />
                                    <div className="div-37">4.8</div>
                                </div>
                            </div>
                            <div className="div-38">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                                iaculis eget eget neque, posuere quis placerat arcu.
                            </div>
                            <div className="div-39">
                                <div className="div-40">view info</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec69ddd20b265f7dde8b311080115e4401fec0ef3327b8ebcdd61d188bca0c51?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-13"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-41">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-14"
                        />
                        <div className="div-42">
                            <div className="div-43">
                                <div className="div-44">Agbaje Ade</div>
                                <div className="div-45">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7c2da79810e2081a3798a581f78e8db857bf24598adb0122fa7755ec1f482d?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                        className="img-15"
                                    />
                                    <div className="div-46">4.8</div>
                                </div>
                            </div>
                            <div className="div-47">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                                iaculis eget eget neque, posuere quis placerat arcu.
                            </div>
                            <div className="div-48">
                                <div className="div-49">view info</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/726b654c7d06ac6a442f8f23e9703ffd848a8bca0f5185c254642ecf45f42bf7?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-16"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-50">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-17"
                        />
                        <div className="div-51">
                            <div className="div-52">
                                <div className="div-53">Agbaje Ade</div>
                                <div className="div-54">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7c2da79810e2081a3798a581f78e8db857bf24598adb0122fa7755ec1f482d?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                        className="img-18"
                                    />
                                    <div className="div-55">4.8</div>
                                </div>
                            </div>
                            <div className="div-56">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                                iaculis eget eget neque, posuere quis placerat arcu.
                            </div>
                            <div className="div-57">
                                <div className="div-58">view info</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/726b654c7d06ac6a442f8f23e9703ffd848a8bca0f5185c254642ecf45f42bf7?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-19"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-59">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-20"
                        />
                        <div className="div-60">
                            <div className="div-61">
                                <div className="div-62">Agbaje Ade</div>
                                <div className="div-63">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7c2da79810e2081a3798a581f78e8db857bf24598adb0122fa7755ec1f482d?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                        className="img-21"
                                    />
                                    <div className="div-64">4.8</div>
                                </div>
                            </div>
                            <div className="div-65">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                                iaculis eget eget neque, posuere quis placerat arcu.
                            </div>
                            <div className="div-66">
                                <div className="div-67">view info</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/726b654c7d06ac6a442f8f23e9703ffd848a8bca0f5185c254642ecf45f42bf7?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-22"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-68">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4b916b285c92481ad9a2f1a8d0f627a4dcac7a7302a98600389adc4fbb900?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-23"
                        />
                        <div className="div-69">
                            <div className="div-70">
                                <div className="div-71">Agbaje Ade</div>
                                <div className="div-72">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c32545c062faf74ab247b91c96bbff2234aaeda53e35826c857741d2c7de90?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                        className="img-24"
                                    />
                                    <div className="div-73">4.8</div>
                                </div>
                            </div>
                            <div className="div-74">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
                                iaculis eget eget neque, posuere quis placerat arcu.
                            </div>
                            <div className="div-75">
                                <div className="div-76">view info</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd5c25f61e4a11e5d534fdfa394bc1ef7495ef3e981ea5ba35cc3049aa9cea8b?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-25"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-77">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ae6fb014e246d9ed8e2cdb68aac60c5af2f89461500bd839819699c5bffb65?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                        className="img-26"
                    />
                    <div className="div-78">
                        <div className="div-79">Email address</div>
                        <div className="div-80">Subscribe for updates</div>
                    </div>
                    <div className="div-81">
                        Immi-Transact is not a law firm and does not provide legal advice.
                        We connect individuals with licensed immigration attorneys for legal
                        consultations and representation.
                    </div>
                    <div className="div-82">
                        <div className="div-83">Terms of service</div>
                        <div className="div-84">Security & Privacy</div>
                        <div className="div-85">FAQs</div>
                        <div className="div-86">Contact Us</div>
                    </div>
                    <div className="div-87">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47bd7ed30eea273a9b81b9aab46e70137f6c7ce8f8cc74b3614a883f14856f40?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-27"
                        />
                        <div className="div-88">
                            Immi-Transact 2023. All rights reserved
                        </div>
                    </div>
                </div>
            </div>



            <div className="div-web">
                <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
                <p className="text-wrapper-8">Other Attorneys you may be interested in</p>
                <p className="text-wrapper-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                    placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                    posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget

                    neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis
                    eget eget neque, posuere quis placerat arcu.
                </p>
                <div className="frame-10">
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-5.png"
                        memoryMessage="memory-message-6.svg"
                        uisFavorite="uis-favorite-5.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-3.png"
                        memoryMessage="memory-message-4.svg"
                        uisFavorite="uis-favorite-3.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-4.png"
                        memoryMessage="memory-message-5.svg"
                        uisFavorite="uis-favorite-4.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-2.png"
                        memoryMessage="memory-message-3.svg"
                        uisFavorite="uis-favorite-2.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-6.png"
                        memoryMessage="memory-message-7.svg"
                        uisFavorite="uis-favorite-6.svg"
                    />
                </div>
                <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="mask-group-7.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-8.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <img className="rectangle" alt="Rectangle" src="pexels-daniel-xavier-1239291.jpg" />
                <div className="text-wrapper-10">Arizona, USA</div>
                <div className="frame-11">
                    <div className="text-wrapper-11">Habeeb Munir</div>
                    <div className="group">
                        <img className="ic-round-star-rate" alt="Ic round star rate" src="ic-round-star-rate.svg" />
                        <div className="text-wrapper-12">4.5</div>
                        <div className="text-wrapper-13">(12 reviews)</div>
                    </div>
                </div>
                <div className="frame-12">
                    <Button className="button-4" property1="primary" text="CONTACT" />
                    <img className="material-symbols-2" alt="Material symbols" src="material-symbols-favorite-outline.svg" />
                </div>
                <div className="text-wrapper-14">Reviews</div>
                <Button className="button-5" property1="secondary" text="MORE REVIEWS" />
                <div className="frame-13">
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD FOR ASYLUM" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH EMPLOYMENT" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH FAMILY" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH REGISTRY" />
                </div>
                <div className="group-2">
                    <p className="text-wrapper-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                        placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu.
                    </p>
                    <div className="group-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-9.svg" />
                        <div className="group-4">
                            <div className="text-wrapper-16">Habeeb Munir</div>
                            <div className="text-wrapper-17">Arizona, USA</div>
                            <div className="frame-14">
                                <div className="frame-15">
                                    <img className="frame-16" alt="Frame" src="frame-362.svg" />
                                    <div className="text-wrapper-18">4</div>
                                </div>
                                <img className="line" alt="Line" src="line-22.svg" />
                                <div className="text-wrapper-19">2 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="line-2" alt="Line" src="line-23.svg" />
                <div className="group-5">
                    <p className="text-wrapper-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                        placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu.
                    </p>
                    <div className="group-3">
                        <img className="ellipse" alt="Ellipse" src="image.svg" />
                        <div className="group-4">
                            <div className="text-wrapper-16">Habeeb Munir</div>
                            <div className="text-wrapper-17">Arizona, USA</div>
                            <div className="frame-14">
                                <div className="frame-15">
                                    <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                    <div className="text-wrapper-18">4</div>
                                </div>
                                <img className="line" alt="Line" src="line-22-2.svg" />
                                <div className="text-wrapper-19">2 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

