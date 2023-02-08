import { getPngFromId } from '../../../utils'

import components from '../../../../../themes/tailblocks'

const loadBlocks = (newEditor: { BlockManager: any }, standaloneServer: boolean): void => {
  const blockManager = newEditor.BlockManager

  Object.entries(components).forEach(([k, s]) => {
    blockManager.add(s.displayName, {
      label: getPngFromId('tailblocks', k, standaloneServer),
      attributes: { class: '' },
      content: s.source,
      category: { label: s.category, open: s.category === 'Features' },
    })
  })
}
export default loadBlocks
