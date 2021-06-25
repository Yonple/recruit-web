import tw, { styled } from 'twin.macro'
import React, { ReactElement } from 'react'

interface Props {
  children?: Array<ReactElement<typeof TabPane>> | ReactElement<typeof TabPane>
  activeTabKey: string
  onChange: (tabKey: string) => void
}
export const Tab = ({ children, activeTabKey, onChange }: Props) => {
  const tabPanes = React.Children.toArray(children) as React.ReactElement<TabPaneProps>[]

  if (tabPanes.length === 0) return null

  return (
    <section>
      <header tw="border-b mb-2">
        {tabPanes.map((tabPane) => (
          <TabButton
            key={tabPane.props.tabKey}
            active={activeTabKey === tabPane.props.tabKey}
            onClick={() => onChange(tabPane.props.tabKey)}
          >
            {tabPane.props.name}
          </TabButton>
        ))}
      </header>
      <div>
        {tabPanes.find((tabPane) => tabPane.props.tabKey === activeTabKey)?.props?.children}
      </div>
    </section>
  )
}

interface TabPaneProps {
  name: string
  tabKey: string
  children?: React.ReactNode
}
const TabPane = (props: TabPaneProps) => {
  return null
}

Tab.TabPane = TabPane

const TabButton = styled.button<{ active?: boolean }>`
  ${tw`p-3 hover:bg-gray-100 transition-colors rounded outline-none appearance-none focus:outline-none hover:text-blue-300 font-bold`}

  ${(props) => props.active && tw`text-blue-500`}
`
