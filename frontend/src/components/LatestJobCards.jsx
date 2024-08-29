import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useColorMode } from '@chakra-ui/react';

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      onClick={() => navigate(`/description/${job._id}`)}
      className={`p-5 rounded-md shadow-xl ${colorMode === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-black'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className='flex items-center justify-between'>
        <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant='outline' size='icon'>
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
            <AvatarFallback>{job?.company?.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className={`font-medium text-lg ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>
            {job?.company?.name}
          </h1>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>India</p>
        </div>
      </div>
      <div>
        <h1 className={`font-bold text-lg my-2 ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>
          {job?.title}
        </h1>
        <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${!showFullDescription ? 'line-clamp-2' : ''}`}>
          {job?.description}
        </p>
        {!showFullDescription && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the parent onClick from firing
              toggleDescription();
            }}
            className="text-blue-500 underline text-sm"
          >
            See more
          </button>
        )}
        {showFullDescription && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the parent onClick from firing
              toggleDescription();
            }}
            className="text-blue-500 underline text-sm"
          >
            See less
          </button>
        )}
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant='ghost'>
          {job?.position} Positions
        </Badge>
        <Badge className={'text-[#F83002] font-bold'} variant='ghost'>
          {job?.jobType}
        </Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant='ghost'>
          {job?.salary} LPA
        </Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button className='text-gray-950' onClick={() => navigate(`/description/${job?._id}`)} variant='outline'>
          Details
        </Button>
        <Button className='bg-[#7209b7] text-white'>
          Save For Later
        </Button>
      </div>
    </motion.div>
  );
};

export default LatestJobCards;
