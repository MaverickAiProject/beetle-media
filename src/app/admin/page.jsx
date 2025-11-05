"use client"
import InnerDashboardLayout from '@/components/dashboard/InnerDashboardLayout'
import React from 'react'
import UserBarChart from './(dashboard)/UserBarChart'
import TotalsCards from './(dashboard)/TotalsCards'
import EnquiriesPieChart from './(dashboard)/EnquiriesPieChart'
import { usePermissions } from '@/hooks/usePermissions'
import { Resources } from '@/lib/permissions'
import NotAuthorizedPage from '@/components/notAuthorized'

function page() {
    const { checkView, } = usePermissions()

    // Permissions
    const canView = checkView(Resources.DASHBOARD)

    if (!canView) return <NotAuthorizedPage />

    return (
        <InnerDashboardLayout >
            <div className='w-full mb-3'>
                <h1 className='text-primary font-bold sm:text-2xl lg:text-4xl'>Dashboard</h1>
            </div>
            <div className='space-y-4 w-full'>
                <div className='grid grid-cols-2 gap-4'>
                    <EnquiriesPieChart />
                    <UserBarChart />
                </div>
                <TotalsCards />
            </div>
        </InnerDashboardLayout>
    )
}

export default page
