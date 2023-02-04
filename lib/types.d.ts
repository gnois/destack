interface dataType {
  content: string
  name?: string
}
export { dataType }

interface StaticBuildProps {
  data?: dataType[]
}

interface ContentProviderProps extends StaticBuildProps {
  showEditorInProd: boolean
  standaloneServer: boolean
}
export { ContentProviderProps }