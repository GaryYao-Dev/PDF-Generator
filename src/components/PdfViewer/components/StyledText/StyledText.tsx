/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { Parser } from 'html-to-react'
import { Text, StyleSheet, View } from '@react-pdf/renderer'

const htmlToReactParser = Parser()

interface StyledTextProps {
  text: string
  styleProp?: {
    container?: {
      [key: string]: string
    }
    paragraph?: {
      [key: string]: string
    }
    list?: {
      [key: string]: string
    }
  }
}

const StyledText: FC<StyledTextProps> = (props) => {
  const { text, styleProp } = props
  console.log('text', text)
  const styles = StyleSheet.create({
    paragraph: {},
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    underline: { textDecoration: 'underline' },
    container: {},
  })
  let listItemNumber = 0
  const mapNodeToPdfComponent = (node: any, index: number): any => {
    if (node.type === 'tag') {
      if (node.name === 'p') {
        return (
          <View
            style={{ ...styles.container, ...styleProp?.container }}
            key={index}>
            <Text style={{ ...styles.paragraph, ...styleProp?.paragraph }}>
              {node.children.map(mapNodeToPdfComponent)}
            </Text>
          </View>
        )
      }
      if (node.name === 'strong') {
        return (
          <View
            style={{ ...styles.container, ...styleProp?.container }}
            key={index}>
            <Text style={{ ...styles.bold, ...styleProp?.paragraph }}>
              {node.children.map(mapNodeToPdfComponent)}
            </Text>
          </View>
        )
      }
      if (node.name === 'u') {
        return (
          <Text style={styles.underline}>
            {node.children.map(mapNodeToPdfComponent)}
          </Text>
        )
      }

      if (node.name === 'em') {
        return (
          <View
            style={{ ...styles.container, ...styleProp?.container }}
            key={index}>
            <Text style={{ ...styles.italic, ...styleProp?.paragraph }}>
              {node.children.map(mapNodeToPdfComponent)}
            </Text>
          </View>
        )
      }
      if (node.name === 'ul') {
        return (
          <View
            key={index}
            style={{ ...styles.container, ...styleProp?.container }}>
            {node.children.map((childNode: any, childIndex: number) => (
              <React.Fragment key={`ul-${index}-${childIndex}`}>
                {mapNodeToPdfComponent(childNode, childIndex)}
              </React.Fragment>
            ))}
          </View>
        )
      }

      if (node.name === 'ol') {
        listItemNumber = 0 // Reset the list item number for each new ordered list
        return (
          <View
            key={`ol-${index}-${listItemNumber}`}
            style={{ ...styles.container, ...styleProp?.container }}>
            {node.children.map((childNode: any, childIndex: number) => (
              <React.Fragment
                key={`ol-${index}-${listItemNumber}-${childIndex}`}>
                {mapNodeToPdfComponent(childNode, childIndex)}
              </React.Fragment>
            ))}
          </View>
        )
      }

      if (node.name === 'li') {
        let prefix = ''
        if (node.parent.name === 'ol') {
          listItemNumber++
          prefix = listItemNumber + '. '
        } else if (node.parent.name === 'ul') {
          prefix = '• '
        }
        return (
          <View style={{ ...styles.container, ...styleProp?.list }}>
            <Text
              style={{
                ...styles.paragraph,
                ...styleProp?.paragraph,
                marginLeft: '80px',
              }}>
              {prefix + node.children.map(mapNodeToPdfComponent)}
            </Text>
          </View>
        )
      }
    }
    console.log('node data', node.data)
    return node.data
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformHtmlToPdf = (htmlString: string): any => {
    const processingInstructions = [
      {
        shouldProcessNode: () => true,
        processNode: mapNodeToPdfComponent,
      },
    ]
    const reactElement = htmlToReactParser.parseWithInstructions(
      htmlString,
      () => true,
      processingInstructions
    )
    return reactElement
  }
  const pdfComponents = transformHtmlToPdf(text)

  return <>{pdfComponents}</>
}

export default StyledText
