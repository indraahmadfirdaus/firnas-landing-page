import React from 'react'
import { Modal, Table } from 'flowbite-react'

const CustomModal = ({ openModal, setOpenModal }) => {
  // Agenda data
  const agendaData = [
    { no: '1', kegiatan: 'OPEN ADMISSION', tanggal: '4 NOV 2024-30 MARET 2025' },
    { no: '2', kegiatan: 'OBSERVASI', tanggal: '13 APRIL 2025' },
    { no: '3', kegiatan: 'DAFTAR ULANG', tanggal: '14-30 APRIL 2025' },
    { no: '4', kegiatan: 'MASUK SEKOLAH', tanggal: '7 JULI 2025' }
  ];

  // Alur PPDB data
  const alurPpdbData = [
    { no: '1', tataCara: 'Buka www.firnastechschool.id' },
    { no: '2', tataCara: 'klik tumbnail "DAFTAR" Masuk ke link Whatsapp Admin' },
    { no: '3', tataCara: 'Melakukan transfer biaya Formulir melalui rek Yayaan Firnas Cendikia Permata' },
    { no: '4', tataCara: 'Mengisi Formulir Pendaftaran' },
    { no: '5', tataCara: 'Bergabung di grup Whatsapp ppdb 2025/2026' }
  ];

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Penerimaan Peserta Didik Baru 2025/2026</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {/* Agenda Table */}
          <h3 className="">AGENDA</h3>
          <Table>
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>KEGIATAN</Table.HeadCell>
              <Table.HeadCell>TANGGAL</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {agendaData.map((item, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.no}</Table.Cell>
                  <Table.Cell>{item.kegiatan}</Table.Cell>
                  <Table.Cell>{item.tanggal}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {/* Alur PPDB Table */}
          <h3 className="">ALUR PPDB</h3>
          <Table>
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>TATA CARA</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {alurPpdbData.map((item, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.no}</Table.Cell>
                  <Table.Cell>{item.tataCara}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
