/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/store/hooks'
import { FC } from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  PDFViewer,
} from '@react-pdf/renderer'
import StyledText from './components/StyledText'
import Divider from './components/Divider'
import titleGenerator from '@/utils/titleGenerator'
import dayjs from 'dayjs'

// interface PdfViewerProps {

// }

// const PdfViewer: FC<PdfViewerProps> = (props) => {
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',
      fontStyle: 'italic',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf',
      fontWeight: 800,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-300.ttf',
      fontWeight: 300,
    },
  ],
})

// const parser = (text: string) => {

const PdfViewer: FC = () => {
  // const {} = props
  const data = useAppSelector((state) => state.data)
  const { personalDetail, summary, skill, profession, education, project } =
    data

  const personalInfoFisrtLine: string[] = []
  const personalInfoSecondLine: string[] = []
  if ('data' in personalDetail) {
    Object.values(personalDetail.data).forEach((value) => {
      if (value.value && value.label != 'Name') {
        if (value.value.includes('.com/')) {
          personalInfoSecondLine.push(value.value)
        } else {
          personalInfoFisrtLine.push(value.value)
        }
      }
    })
  }
  const personalInfo = [
    personalInfoFisrtLine.join(' | '),
    personalInfoSecondLine.join(' | '),
  ].join('\n')

  return (
    <PDFViewer width={'100%'} height={'100%'}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.name}>
              {personalDetail.data?.name.value || ''}
            </Text>
            <View style={styles.personalInfo}>
              <Text style={{ textAlign: 'center', fontSize: '12px' }}>
                {personalInfo}
              </Text>
            </View>
          </View>

          {summary && (
            <View style={styles.section}>
              <Text style={styles.title}>{'PERSONAL SUMMARY'}</Text>
              <Divider />
              <View>
                <StyledText
                  text={summary}
                  styleProp={{
                    paragraph: { fontSize: '12px' },
                    container: { margin: '2px 8px' },
                  }}
                />
              </View>
            </View>
          )}

          {/* <View style={styles.section}>
            <Text style={styles.title}>{'SKILLS'}</Text>
            <Divider />
            {skill.map((skillItem, index) => (
              <View key={`skill-${index}`} style={{ marginVertical: '2px' }}>
                <Text style={styles.skillTitle}>{skillItem.title}</Text>
                <Text style={styles.skillContent}>{skillItem.content}</Text>
              </View>
            ))}
          </View> */}

          <View style={styles.section}>
            <Text style={styles.title}>{'SKILL'}</Text>
            <Divider />
            {skill &&
              skill.length > 0 &&
              skill.map((item, index) => (
                <View
                  key={`profession-${index}`}
                  style={{ marginVertical: '2px' }}>
                  <Text style={styles.skillTitle}>{titleGenerator(item)}</Text>
                  <View style={{marginHorizontal: '12px'}}>
                    <StyledText
                      text={item.description}
                      styleProp={{
                        paragraph: { fontSize: '12px' },
                        container: { marginVertical: '2px' },
                      }}
                    />
                  </View>
                </View>
              ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>{'PROFESSIONAL EXPERIENCE'}</Text>
            <Divider />
            {profession &&
              profession.length > 0 &&
              profession.map((professionItem, index) => (
                <View
                  key={`profession-${index}`}
                  style={{ marginVertical: '8px' }}>
                  <Text style={styles.skillTitle}>
                    {titleGenerator(professionItem)}
                  </Text>

                  {professionItem.data.startDate?.value && (
                    <Text style={styles.itemSubTitle}>
                      {`${dayjs(professionItem.data.startDate.value).format(
                        'MM/YYYY'
                      )} - ${
                        professionItem.data.endDate?.value
                          ? dayjs(professionItem.data.endDate.value).format(
                              'MM/YYYY'
                            )
                          : 'Present'
                      }${
                        professionItem.data.type?.value
                          ? ' | ' + professionItem.data.type?.value
                          : ''
                      }${
                        professionItem.data.location?.value
                          ? ' | ' + professionItem.data.location?.value
                          : ''
                      }`}
                    </Text>
                  )}
                  <View style={styles.itemDescription}>
                    <StyledText
                      text={professionItem.description}
                      styleProp={{
                        paragraph: { fontSize: '12px' },
                        container: { marginVertical: '0px' },
                        list: { marginVertical: '2px' },
                      }}
                    />
                  </View>
                </View>
              ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>{'PROJECT EXPERIENCE'}</Text>
            <Divider />
            {project &&
              project.length > 0 &&
              project.map((item, index) => (
                <View
                  key={`profession-${index}`}
                  style={{ marginVertical: '8px' }}>
                  <Text style={styles.skillTitle}>{titleGenerator(item)}</Text>

                  {item.data.startDate?.value && (
                    <Text style={styles.itemSubTitle}>
                      {`${dayjs(item.data.startDate.value).format(
                        'MM/YYYY'
                      )} - ${
                        item.data.endDate?.value
                          ? dayjs(item.data.endDate.value).format('MM/YYYY')
                          : 'Present'
                      }${
                        item.data.type?.value
                          ? ' | ' + item.data.type?.value
                          : ''
                      }${
                        item.data.location?.value
                          ? ' | ' + item.data.location?.value
                          : ''
                      }`}
                    </Text>
                  )}
                  <View style={styles.itemDescription}>
                    <StyledText
                      text={item.description}
                      styleProp={{
                        paragraph: { fontSize: '12px' },
                        container: { marginVertical: '2px' },
                      }}
                    />
                  </View>
                </View>
              ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>{'EDUCATION'}</Text>
            <Divider />
            {education &&
              education.length > 0 &&
              education.map((item, index) => (
                <View
                  key={`profession-${index}`}
                  style={{ marginVertical: '8px' }}>
                  <Text style={styles.skillTitle}>{titleGenerator(item)}</Text>

                  {item.data.startDate?.value && (
                    <Text style={styles.itemSubTitle}>
                      {`${dayjs(item.data.startDate.value).format(
                        'MM/YYYY'
                      )} - ${
                        item.data.endDate?.value
                          ? dayjs(item.data.endDate.value).format('MM/YYYY')
                          : 'Present'
                      }${
                        item.data.type?.value
                          ? ' | ' + item.data.type?.value
                          : ''
                      }${
                        item.data.location?.value
                          ? ' | ' + item.data.location?.value
                          : ''
                      }`}
                    </Text>
                  )}
                  <View style={styles.itemDescription}>
                    <StyledText
                      text={item.description}
                      styleProp={{
                        paragraph: { fontSize: '12px' },
                        container: { marginVertical: '2px' },
                      }}
                    />
                  </View>
                </View>
              ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default PdfViewer

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily: 'Open Sans',
    padding: '40px 40px',
  },
  section: {
    marginVertical: '4px',
  },
  title: {
    fontWeight: 800,
    fontSize: '16px',
  },
  name: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '18px',
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  skillTitle: { fontSize: '14px', fontWeight: 600, marginLeft: '4px' },
  skillContent: { fontSize: '12px', marginLeft: '12px' },
  itemSubTitle: {
    fontSize: '12px',
    marginLeft: '12px',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  itemDescription: {
    fontSize: '24px',
    margin: '12px 12px 0 12px',
  },
})
