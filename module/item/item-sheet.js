export class WurmItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["wurm", "sheet", "item"],
      template: "systems/wurm/templates/item/item-sheet.html",
      width: 520,
      height: 480,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  getData() {
    const context = super.getData();
    // V11+ syntax uses context.item.system
    context.systemData = context.item.system;
    return context;
  }
}
