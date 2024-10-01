"use client";
import { BotMessageSquare, MessageCircleMore, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useVoiceToText } from "react-speakup";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import {
    Chat,
    Channel,
    Window,
    ChannelHeader,
    MessageList,
    MessageInput,
    Thread,
    LoadingIndicator
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/v2/index.css'

import { Mic } from "lucide-react";
import { useRouter } from "next/navigation";
import { StreamChat } from 'stream-chat'


const VoiceToTextComponent = () => {
    const { startListening, stopListening, transcript, reset } = useVoiceToText();
    const API_KEY = "AIzaSyDJZWVMlc9Awp-itYA4ZRUUXufU3q_as0c";
    const MODEL_NAME = "gemini-1.5-flash";

    const router = useRouter();

    const [client, setClient] = useState(null)
    const user = {
        id: 'john',
        name: 'John',
        image: 'https://picsum.photos/200'
    }
    const user2 = {
        id: 'jane',
        name: 'Jane',
        image: 'https://picsum.photos/200'
    }

    const [channel, setChannel] = useState(null)

    const apiKey = "8b7nsyauzs47"

    useEffect(() => {
        console.log(user)
        async function init() {
            const chatClient = StreamChat.getInstance(apiKey);
            await chatClient.connectUser(user, chatClient.devToken(user.id))

            const channel = chatClient.channel('messaging', 'react-talk', {
                image: 'https://picsum.photos/200',
                name: 'buddhe ki chinta',
                members: [user.id],
            })
            await channel.watch()


            setChannel(channel);
            setClient(chatClient)
        }

        init();


        if (client) return () => client.disconnectUser();

    }, [])

    useEffect(() => {
        const initChat = async () => {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const { response } = await genAI
                .getGenerativeModel({
                    model: MODEL_NAME,
                    systemInstruction: `You are a route generator based on text input for navigation, the routes in the app are: /home, /marketplace, /profile, /emergency. You will be given a text input based on that you have to select the best possible route and return in the format /{route}.
                    The steps are as follows: 
                    1. Take the text input
                    2. Analyze the text (it can be any language) input to generate the best possible route.
                    3. If the text input is completely out of context, return /hom e as the default route.`
                }).generateContent(transcript);
            
             console.log(response.text())

            
            // router.push(response.text())
        };
        
        initChat();
    }, [transcript]);
    
    return (
        <>
            <div className="fixed bottom-[30px] right-7 z-50 bg-zinc-200 rounded-full h-[70px] w-[70px] flex justify-center items-center">

                <Dialog onOpenChange={(e) => {
                    if (!e) {
                        stopListening();

                        reset();
                    }
                }}>
                    <DialogTrigger asChild>
                        <Button variant='outline' onClick={() => {
                            startListening();
                        }}><Mic /></Button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <div className="flex">
                                    <h1>{transcript}</h1>
                                    <Mic className="text-4xl" />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="fixed bottom-[90px] right-7 z-50 bg-zinc-200 rounded-full h-[70px] w-[70px] flex justify-center items-center">

                <Dialog onOpenChange={(e) => {
                    if (!e) {
                        stopListening();

                        reset();
                    }
                }}>
                    <DialogTrigger asChild>
                        <MessageCircleMore className="bg-white" /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <Chat client={client}>
                                    <Channel channel={channel}>
                                        <window>
                                            <ChannelHeader />
                                            <MessageList />
                                            <MessageInput />
                                        </window>
                                        <Thread />
                                    </Channel>
                                </Chat>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default VoiceToTextComponent; 
