import AnimatedContainer from '@/components/AnimatedContainer';
import React from 'react';

const PricingCompare = () => {
    return (
        <div className="container mt-16">
            <div className="rounded-3xl lg:rounded-4xl bg-main-gradient-to-top overflow-hidden relative p-6 lg:p-7 shadow-black-card">
                <div className="lg:flex hidden items-center bg-white/16 rounded-full border border-white/8 backdrop-blur-[48px] shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                    <div className="w-[27%] px-8 py-4">
                        <span className="text-xl font-medium title">Plan</span>
                    </div>
                    <div className="w-[63%] flex items-center">
                        {pricingPlans.map((item, index) => (
                            <div key={'pricing-plan-' + index} className="flex-1 flex items-center justify-center px-6 py-4">
                                <span className="capitalize title text-xl font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-3">
                    {comparingTitles.map((item, index) => (
                        <AnimatedContainer key={index} delay={index * 200} className="flex lg:flex-row flex-col lg:border-b border-white/12 border-dashed last:border-none">
                            <div className="lg:w-[27%] lg:text-left text-center lg:px-8 px-4 py-4 rounded-full bg-white/16 lg:bg-transparent lg:shadow-none backdrop-blur-[48px] lg:backdrop-blur-none shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                <span className="text-xl font-normal title">{item}</span>
                            </div>
                            <>
                                <div className="flex items-center lg:hidden border-b border-white/12">
                                    {pricingPlans.map((item, j) => (
                                        <div key={'pricing-plan-' + j} className="flex-1 flex items-center justify-center px-6 py-4">
                                            <span className="capitalize title text-xl font-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="lg:w-[63%] flex items-center">
                                    {pricingPlans.map((item, j) => (
                                        <div key={'pricing-plan-' + j} className="flex-1 flex items-center justify-center px-6 py-4">
                                            <span className="capitalize title text-xl font-normal">
                                                {pricingCompareData[item][index] === 'yes' ? (
                                                    <i className="pi pi-check text-sm" />
                                                ) : pricingCompareData[item][index] === 'no' ? (
                                                    <i className="pi pi-minus text-sm opacity-60" />
                                                ) : (
                                                    pricingCompareData[item][index]
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingCompare;

type PricingPlansType = 'basic' | 'pro' | 'premium';
const pricingPlans: PricingPlansType[] = ['basic', 'pro', 'premium'];

const comparingTitles = ['3 Active Members', 'Up to 10 Components', 'High Request Limits', 'Unlimited Access', 'Advanced Analytics', 'Data Export', 'Prioritized Support', 'Real-time Updates', 'Batch Requests', 'Webhooks'];

const pricingCompareData = {
    basic: ['$24', '10', '10', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no'],
    pro: ['$64', 'Unlimited', '20', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no'],
    premium: ['$130', 'Unlimited', 'Unlimited', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes']
};
