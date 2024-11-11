import React from 'react'
import { Modal, Table } from 'flowbite-react'

const SmaModal = ({ openModal, setOpenModal }) => {
  // Program data for SMA
  const programData = [
    { no: '1', program: 'Pengetahuan umum' },
    { no: '2', program: 'Keislaman' },
    { no: '3', program: 'Al Quràn (Tahsin, Tahfiz, Tafsir, Tulis)' },
    { no: '4', program: 'Pemrograman Lanjutan' },
    { no: '5', program: 'Pengembangan Aplikasi dan Perangkat Lunak' },
    { no: '6', program: 'Pengenalan ke Kecerdasan Buatan (Artificial Intelligence, AI)' },
    { no: '7', program: 'Cybersecurity' },
    { no: '8', program: 'Desain Grafis dan Multimedia' },
    { no: '9', program: 'Pengembangan Permainan (Game Development)' },
    { no: '10', program: 'Analisis Data dan Big Data' },
    { no: '11', program: 'Internet of Things (IoT)' },
    { no: '12', program: 'Pengembangan Keterampilan Soft Skills dalam Teknologi' },
    { no: '13', program: 'Pengembangan Proyek Berbasis Teknologi' },
    { no: '14', program: 'Leadership berbasis nilai Islam' },
    { no: '15', program: 'Bahasa Inggris' },
    { no: '16', program: 'Bahasa Jepang' },
    { no: '17', program: 'Matematika Dasar' }
  ];

  // Kegiatan Pendidikan data for SMA
  const kegiatanPendidikanData = [
    { no: '1', kegiatan: 'Kunjungan Industri' },
    { no: '2', kegiatan: 'Ekstra kurikuler (olah raga, renang, gym, Tenis, futsal dll)' },
    { no: '3', kegiatan: 'MABIT' },
    { no: '4', kegiatan: 'Mukhayam Al Quràn' },
    { no: '5', kegiatan: 'Sharing Session' },
    { no: '6', kegiatan: 'Islamic Class' },
    { no: '7', kegiatan: 'Training Janaiz' },
    { no: '8', kegiatan: 'Trining Faraidh' },
    { no: '9', kegiatan: 'Project IT' },
    { no: '10', kegiatan: 'Bimbingan karir' },
    { no: '11', kegiatan: 'TM' }
  ];

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>PROGRAM SMA Berbasis Teknologi (3 Tahun) ONSITE</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {/* Program Table */}
          <h3 className="">PROGRAM</h3>
          <Table>
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>PROGRAM</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {programData.map((item, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.no}</Table.Cell>
                  <Table.Cell>{item.program}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {/* Kegiatan Pendidikan Table */}
          <h3 className="">KEGIATAN PENDIDIKAN</h3>
          <Table>
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>KEGIATAN PENDIDIKAN</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {kegiatanPendidikanData.map((item, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.no}</Table.Cell>
                  <Table.Cell>{item.kegiatan}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SmaModal;
