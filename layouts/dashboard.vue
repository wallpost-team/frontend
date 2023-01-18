<template>
    <div class="bg-ocean-blue">
        <div class="container h-screen mx-auto">
            <DashboardHeader />
            <div class="flex">
                <DashboardSidebar />
                <div class="container-xl">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>