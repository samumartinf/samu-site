<script lang="ts">
    // Components
    import IpadMock from './devices/IpadMock.svelte';
    import IphoneMock from './devices/IphoneMock.svelte';
    import MacbookMock from './devices/MacbookMock.svelte';
    import { fly, fade, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let mounted = $state(false);
    let sectionElement: HTMLElement;

    onMount(() => {
        // Create intersection observer to trigger animations when section enters view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        mounted = true;
                        observer.disconnect(); // Only trigger once
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully in view
            }
        );

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            observer.disconnect();
        };
    });
</script>

<section bind:this={sectionElement} class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
        <!-- Section header -->
        {#if mounted}
            <div class="text-center mb-16" in:fly={{ y: 50, duration: 800, delay: 100 }}>
                <h2 class="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                    Works everywhere you do
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Seamlessly sync accross devices, from your 4k screen to your iPhone.
                </p>
            </div>
        {/if}

        <!-- Device mockups - Responsive design -->
        
        <!-- Desktop/Tablet: Overlapping style -->
        {#if mounted}
            <div class="hidden md:block relative h-[800px] max-w-6xl mx-auto">
                <!-- MacBook mockup - Background layer (flies in from top) -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 scale-110" in:fly={{ y: -100, duration: 1000, delay: 200 }}>
                    <MacbookMock view="task" message="Mac" />
                </div>

                <!-- iPad mockup - Left overlap (flies in from left) -->
                <div class="absolute top-20 -left-14 z-20 transform rotate-[-12deg] scale-[0.65]" in:fly={{ x: -100, duration: 1000, delay: 400 }}>
                    <IpadMock view="habit" orientation="portrait" kanban={false} message="iPad" />
                </div>

                <!-- iPhone mockup - Right overlap (flies in from right) -->
                <div class="absolute top-28 right-4 z-30 transform rotate-[12deg] scale-[0.65]" in:fly={{ x: 100, duration: 1000, delay: 600 }}>
                    <IphoneMock view="task" message="iPhone" />
                </div>
            </div>
        {/if}

        <!-- Mobile: Simple stacked layout -->
        {#if mounted}
            <div class="md:hidden space-y-12" in:fly={{ y: 100, duration: 1000, delay: 400 }}>
                <!-- iPhone mockup - Featured on mobile -->
                <div class="scale-[0.65]">
                    <IphoneMock view="task" message="iPhone" />
                </div>

                <!-- iPad mockup - Secondary -->
                <div class="scale-[0.65]">
                    <IpadMock view="habit" orientation="portrait" kanban={false} message="iPad" />
                </div>

                <!-- MacBook mockup - Simplified for mobile -->
                <div class="scale-[0.65]">
                    <MacbookMock view="task" message="Mac" />
                </div>
            </div>
        {/if}
    </div>
</section>
  