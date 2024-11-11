import React from 'react'
import { Modal, Table } from 'flowbite-react'

const SmpBiayaModal = ({ openModal, setOpenModal }) => {
  // Biaya data for SMP ONSITE
  const biayaData = [
    { no: '1', biaya: 'formulir Pendaftaran', amount: '100.000', ket: '1 kali diawal' },
    { no: '2', biaya: 'Biaya pendidikan Include Makan Siang', amount: '1.000.000', ket: 'Bulanan' },
    { no: '3', biaya: 'Dana Kegiatan', amount: '3.500.000', ket: 'Tahunan' },
    { no: '4', biaya: 'Dana Gedung', amount: '4.000.000', ket: '1 kali di awal' },
    { no: '5', biaya: 'Starter Kit', amount: '2.500.000', ket: '1 kali di awal' },
    { no: '', biaya: '', amount: '11.100.000', ket: 'Total' },
    { no: '', biaya: '', amount: '9.100.000', ket: 'untuk 10 orang pertama' }
  ];

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>BIAYA SMP ONSITE</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {/* Biaya Table */}
          <Table>
            <Table.Head>
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>SMP ONSITE</Table.HeadCell>
              <Table.HeadCell>BIAYA</Table.HeadCell>
              <Table.HeadCell>KET</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {biayaData.map((item, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.no}</Table.Cell>
                  <Table.Cell>{item.biaya}</Table.Cell>
                  <Table.Cell>{item.amount}</Table.Cell>
                  <Table.Cell>{item.ket}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SmpBiayaModal;
