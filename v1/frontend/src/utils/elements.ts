import { selectById } from "./DOM"

export const $root = {
	isValidCustomProperty: function (property: string) {
		if (!property.startsWith("--")) {
			console.error(`Invalid property name. CSS custom properties should start with "--"!`)
			return false
		}

		for (const stylesheet of document.styleSheets) {
			try {
				for (const rule of stylesheet.cssRules) {
					if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
						if (rule.style.getPropertyValue(property)) {
							return true
						}
					}
				}
			} catch(error) {
				console.warn("Could not access stylesheet:", error)
			}
		}

		return false
	},

	getPropertyValue: function(property: string) {
		if(!$root.isValidCustomProperty(property)) {
			throw new Error(`Could't read given property ${ property }! Make sure to input a valid custom property!`)
		}

		const root = document.documentElement
		const styles = getComputedStyle(root)
		return styles.getPropertyValue(property)
	},

	getPropertyValueAsNumber: function(property: string) {
		const value = $root.getPropertyValue(property)
		const valueAsNumber = Number(value.replace(/[^\d]/g, ''))

		if(!valueAsNumber) {
			throw new Error(`Given custom property is "${ property }": "${ value }". This cannot be converted to a number!`)
		}

		return valueAsNumber
	}
}

export const $mobileNavbar = {
	id: "mobile-navbar",
	backdropId: "backdrop-mobile-navbar",

	setVisibility: function(visibility: string) {
		const $element = selectById($mobileNavbar.id)
		const $backdrop = selectById($mobileNavbar.backdropId)
		$element.dataset.visible = visibility
		$backdrop.dataset.visible = visibility
	},

	open: function() {
		$mobileNavbar.setVisibility("true")
	},

	close: function() {
		$mobileNavbar.setVisibility("false")
	},

	toggle: function() {
		const $element = selectById($mobileNavbar.id)
		const $backdrop = selectById($mobileNavbar.backdropId)
		$element.dataset.visible = $backdrop.dataset.visible = ($element.dataset.visible === "true" ? "false" : "true")
	}
}
