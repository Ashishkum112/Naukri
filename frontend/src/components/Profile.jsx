import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Contact, Mail, Pen, Sun, Moon } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '../hooks/useGetAppliedJobs';
import { useColorMode } from '@chakra-ui/react';

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    const { colorMode, toggleColorMode } = useColorMode(); // Dark theme toggle

    return (
        <div className={colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}> {/* Apply background and text color based on theme */}
            <Navbar />
            <div className={`max-w-4xl mx-auto border rounded-2xl my-5 p-8 ${colorMode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile.bio}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Button onClick={toggleColorMode} variant='outline'>
                            {colorMode === 'dark' ? <Sun /> : <Moon />}
                        </Button>
                        <Button onClick={() => setOpen(true)} className='text-right' variant='outline'><Pen /></Button>
                    </div>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 '>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-3'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge className='bg-[#6A38C2] font-bold text-sm' key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid max-w-sm w-full items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Profile;
