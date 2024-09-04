import React, { useEffect, useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';
import { useColorMode } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Bengaluru", "Hyderabad", "Pune", "Mumbai", "Bhubaneswar"]
    },
    {
        filterType: "Software",
        array: ["Software Engineer Intern", "Frontend Developer", "Backend Developer", "FullStack Developer", "Data Science", "Machine Learning", "DevOps Engineer", "QA Engineer", "Security Engineer"]
    },
    {
        filterType: "Electronics",
        array: ["Electronics Engineer","Embedded Systems Engineer", "Hardware Engineer", "VLSI Engineer", "Circuit Design Engineer"]
    },
    {
        filterType: "Consultancy",
        array: ["Business Analyst","Human Resources Consultant","Sales Associate"]
    },
];

const FilterCard = () => {
    const { colorMode } = useColorMode(); // Get the current color mode
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const [expandedFilter, setExpandedFilter] = useState(null);
    const [isMobile] = useMediaQuery("(max-width: 640px)");

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    const toggleFilter = (index) => {
        setExpandedFilter(expandedFilter === index ? null : index);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className={`w-full p-3 rounded-md ${colorMode === 'dark' ? 'bg-gray-800' : 'bg-white'} sm:w-full md:w-auto`}>
            <h1 className={`font-bold text-lg ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="mt-3">
                <div className="filter-grid">
                    {filterData.map((data, index) => (
                        <div key={index} className="filter-group mb-4">
                            <h2
                                className={`font-bold text-md cursor-pointer ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}
                                onClick={() => isMobile && toggleFilter(index)}
                            >
                                {data.filterType}
                            </h2>
                            {/* Show dropdown in mobile view */}
                            {isMobile ? (
                                <Collapse in={expandedFilter === index} animateOpacity>
                                    {data.array.map((item, idx) => {
                                        const itemId = `${index}-${idx}`;
                                        return (
                                            <div className='flex items-center space-x-2 my-2' key={itemId}>
                                                <RadioGroupItem
                                                    value={item}
                                                    id={itemId}
                                                    className={`h-4 w-4 ${colorMode === 'dark' ? 'bg-gray-700 border-gray-500' : 'bg-white border-gray-300'}`}
                                                />
                                                <Label htmlFor={itemId} className={`text-sm ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>{item}</Label>
                                            </div>
                                        );
                                    })}
                                </Collapse>
                            ) : (
                                // Show inline items in desktop view
                                <div>
                                    {data.array.map((item, idx) => {
                                        const itemId = `${index}-${idx}`;
                                        return (
                                            <div className='flex items-center space-x-2 my-2' key={itemId}>
                                                <RadioGroupItem
                                                    value={item}
                                                    id={itemId}
                                                    className={`h-4 w-4 ${colorMode === 'dark' ? 'bg-gray-700 border-gray-500' : 'bg-white border-gray-300'}`}
                                                />
                                                <Label htmlFor={itemId} className={`text-sm ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>{item}</Label>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </RadioGroup>
            <style jsx>{`
                /* Default layout (Desktop and larger) */
                .filter-grid {
                    display: block; /* Display filters vertically by default */
                }

                /* Mobile view (Dropdown menu) */
                @media (max-width: 640px) {
                    .filter-grid {
                        display: block; /* Display filters as dropdown in mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default FilterCard;
