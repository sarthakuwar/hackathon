import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const API_URL = "https://elderly.dedomil.workers.dev/"

export function useGetElderProfile(email) {
    return useQuery({
        queryKey: ["getElderProfile"],
        queryFn: async () => {
            return (
                await axios.get(`${API_URL}/elderly/data/all?email=${email}`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            ).data;
        },
        refetchOnWindowFocus: "always",
        retry: false
    });
}

export function useGetElderTasks() {
    return useQuery({
        queryKey: ["getElderTasks"],
        queryFn: async () => {
            return (
                await axios.get(`${API_URL}/data/all`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${value}`,
                    },
                })
            ).data;
        },
    });
}