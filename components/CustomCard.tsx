'use client';

import React from 'react';
import { CardComponentProps } from 'nextstepjs';

const CustomCard = ({
    step,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    skipTour,
    arrow
}: CardComponentProps) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
                <div className='flex items-center gap-3 mb-4'>
                    {step.icon && <div className='text-2xl'>{step.icon}</div>}
                    <h3 className='text-xl font-bold'>{step.title}</h3>
                </div>
                <div className='mb-6'>{step.content}</div>
                {arrow}
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        {currentStep > 0 && (
                            <button onClick={prevStep} className='px-4 py-2 bg-green-200 text-black'>Previous</button>
                        )}
                        <button onClick={nextStep} className='px-4 py-2 bg-blue-500'>
                            {currentStep == totalSteps - 1 ? "Finish" : "Next"}
                        </button>
                        {step.showSkip && skipTour && (
                            <button onClick={skipTour} className='px-4 py-2 text-gray-500 dark:text-gray-400'>Skip</button>
                        )}
                    </div>
                </div>
                <br />
                <div className='text-sm flex justify-end'>
                        Step {currentStep + 1} of {totalSteps}
                </div>
            </div>
        </>
    );
}

export default CustomCard