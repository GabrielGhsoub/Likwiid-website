// Work that must wait until the prerendered page is fully hydrated, including the routed page
// inside App's <Suspense>, which React hydrates in its own pass after the navbar and footer.
// Changing i18next's language any earlier would make that pass render text the static HTML
// does not have. HydrationComplete (rendered inside that boundary) runs the queue.
let queue: Array<() => void> = []

export function afterHydration(task: () => void): void {
  queue.push(task)
}

export function runAfterHydration(): void {
  const tasks = queue
  queue = []
  for (const task of tasks) task()
}
