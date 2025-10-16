'use client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown';
import { useState } from 'react';

const destinations = [
    {
        id: 'italy',
        label: 'Italy, Roma'
    },
    {
        id: 'turkey',
        label: 'Turkey, Istanbul'
    },
    {
        id: 'poland',
        label: 'Poland, Warsaw'
    }
];

const roomQuests = [
    {
        id: '1room1guest',
        label: '1 Room, 1 Guest'
    },
    {
        id: '1room2guest',
        label: '1 Room, 2 Guests'
    }
];

const TravelDestinationSelector = () => {
    const [selectedDestination, setSelectedDestination] = useState<string>('italy');
    const [selectedRoom, setSelectedRoom] = useState<string>('1room2guest');
    return (
        <div className="-mt-12 bg-surface-0 dark:bg-surface-950 max-w-[68rem] w-[92%] lg:w-auto mx-auto shadow-blue-card dark:shadow-none border-0 dark:border border-white/12 rounded-4xl lg:rounded-full p-6 lg:p-10 flex flex-col lg:flex-row gap-4 relative z-50">
            <DropdownMenu className="lg:flex-1 lg:max-w-60">
                <DropdownMenuTrigger>
                    <span>{destinations.find((x) => x.id === selectedDestination)?.label}</span>
                    <i className="pi pi-map-marker ml-auto"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {destinations.map((item) => (
                        <DropdownMenuItem onClick={() => setSelectedDestination(item.id)} key={item.id}>
                            <span>{item.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="lg:flex-1 flex items-center gap-2 shadow-stroke dark:shadow-none rounded-full">
                <input type="date" className="w-full px-4 py-3 rounded-full border-0 dark:border border-white/12 bg-surface-0 dark:bg-surface-950 text-surface-950 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer"></input>
            </div>
            <div className="lg:flex-1 flex items-center gap-2 shadow-stroke dark:shadow-none rounded-full">
                <input type="date" className="w-full px-4 py-3 rounded-full border-0 dark:border border-white/12 bg-surface-0 dark:bg-surface-950 text-surface-950 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer"></input>
            </div>
            <DropdownMenu className="lg:flex-1 lg:max-w-60">
                <DropdownMenuTrigger>
                    <i className="pi pi-map-marker"></i>
                    <span>{roomQuests.find((x) => x.id === selectedRoom)?.label}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {roomQuests.map((item) => (
                        <DropdownMenuItem onClick={() => setSelectedRoom(item.id)} key={item.id}>
                            <span>{item.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <button className="button-gradient w-full lg:w-auto">
                <i className="pi pi-search"></i>
                Search...
            </button>
        </div>
    );
};

export default TravelDestinationSelector;
