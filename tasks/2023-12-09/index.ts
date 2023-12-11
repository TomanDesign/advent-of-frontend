// Tutaj skopiuj kod zadania

export interface Tool {
	init: () => void
	update: () => void
	dispose: () => void
}

const ERROR_MESSAGE_BEFORE_INIT =
	'Cannot update any tools before initialization.'

export class Equipment<T extends Tool = Tool> {
	tools: Array<T> = []
	initIndexes = new Set<number>()

	registerTools(tool: T) {
		this.tools.push(tool)
	}

	initializeTools() {
		this.tools.forEach((tool, index) => {
			tool.init()
			this.initIndexes.add(index)
		})
	}

	updateTools() {
		this.tools.forEach((tool, index) => {
			if (!this.initIndexes.has(index)) {
				throw new Error(ERROR_MESSAGE_BEFORE_INIT)
			}
			tool.update()
		})
	}
	disposeTools() {
		this.tools.forEach(tool => {
			tool.dispose()
		})
	}
}