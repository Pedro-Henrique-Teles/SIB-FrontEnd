import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";
import { User, Calendar, Phone, MapPin, CreditCard, Mail, Briefcase } from "lucide-react";

export default function ModalVisualizarMembro({ isOpen, onClose, member }) {
    if (!member) return null;

    const InfoItem = ({ icon: Icon, label, value }) => (
        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="mt-0.5">
                <Icon size={20} className="text-[#411616]" />
            </div>
            <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium mb-1">{label}</p>
                <p className="text-sm text-gray-900 font-medium">{value || "—"}</p>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            placement="center"
            backdrop="opaque"
            classNames={{
                backdrop: "backdrop-opac-sm"
            }}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1 bg-gradient-to-r from-[#411616] to-[#5b2020] text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-full">
                            <User size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{member.nome}</h2>
                            <p className="text-sm text-white/80">ID: {member.id}</p>
                        </div>
                    </div>
                </ModalHeader>

                <ModalBody className="py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoItem
                            icon={User}
                            label="Nome Completo"
                            value={member.nome}
                        />
                        
                        <InfoItem
                            icon={Calendar}
                            label="Data de Nascimento"
                            value={member.dataAniversario}
                        />

                        <InfoItem
                            icon={Mail}
                            label="E-mail"
                            value={member.email}
                        />

                        <InfoItem
                            icon={Phone}
                            label="Telefone"
                            value={member.telefone}
                        />

                        <InfoItem
                            icon={CreditCard}
                            label="CPF"
                            value={member.cpf}
                        />

                        <InfoItem
                            icon={Briefcase}
                            label="Cargo"
                            value={member.cargo}
                        />

                        <div className="md:col-span-2">
                            <InfoItem
                                icon={MapPin}
                                label="Endereço"
                                value={member.endereco}
                            />
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>ℹ️ Informação:</strong> Para editar os dados deste membro, 
                            clique no botão de editar (ícone do lápis) na tabela.
                        </p>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button
                        className="bg-[#411616] text-white hover:bg-[#5b2020] transition-colors"
                        onPress={onClose}
                    >
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}