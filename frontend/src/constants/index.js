import {corteIcon, barbaIcon, acabamentosIcon, sobrancelhaIcon, pigmentacaoIcon, deliveryIcon, maquinaIcon} from '../assets/index'
import {corte, barba, acabamento, delivery, pigmentacao, sobrancelha, maquina} from '../assets/index'

const dataServices = [
    {
        id: 1,
        imgLogo: corteIcon,
        imgFundo: corte,
        title: 'CORTE',
        serviceDetails: [
            {
                titleDetails: 'CORTE',
                description: 'Corte de cabelo, lavado com Shampoo e Condicionador La Mafia Kids. Finalização com a linha de produtos La Mafia Kids',
                price: 'R$ 10,00'
            },
            {
                titleDetails: 'CORTE INFANTIL',
                description: 'Corte de Cabelo, lavação com Shampoo e Condicionador La Mafia. Finalização com a linha de produtos La Mafia Barbearia.',
                price: 'R$ 12,00'
            },
            {
                titleDetails: 'CORTE + BARBA',
                description: 'Corte de cabelo, lavação com Shampoo e Condicionador La Máfia e finalização com a linha de produtos para cabelo La Mafia somados a tradicional técnica de barbear, a uma relaxante toalha quente, óleo pré-shave, espuma de barbear aquecida, finalizada com a linha de produtos para barba da La Mafia Barbearia.',
                price: 'R$ 25,00'
            },
            {
                titleDetails: 'CORTE + SOBRANCELHA',
                description: 'Corte de cabelo, lavação com Shampoo e Condicionador La Máfia e finalização com a linha de produtos para cabelo La Mafia somados ao tradicional Design de sobrancelha com técnica que visa retirar apenas o excesso mantendo as linhas naturais, velha “aparada”.',
                price: 'R$ 25,00'
            },
        ]
    },

    {
        id: 2,
        imgLogo: barbaIcon,
        imgFundo: barba,
        title: 'BARBA',
        serviceDetails: [
            {
                titleDetails: 'BARBA NAVALHA',
                description: 'Tradicional técnica de barbear somada a uma relaxante toalha quente, óleo pré-shave, espuma de barbear aquecida. Processo finalizado com massagem relaxante para ativar a circulação utilizando a linha de produtos para barba da La Mafia, After Shave Lotion e Beard Styling Balm.',
                price: 'R$ 10,00'
            },
            {
                titleDetails: 'BARBA MÁQUINA',
                description: 'Técnica exclusiva criada pela La Mafia para aparar e demarcar a barba utilizando máquinas de corte, máquinas de acabamento e tesoura.',
                price: 'R$ 12,00'
            },
            {
                titleDetails: 'CORTE + BARBA',
                description: 'Corte, lavação com Shampoo e Condicionador La Máfia e finalização com a linha de produtos para cabelo La Mafia somados a tradicional técnica de barbear, a uma relaxante toalha quente, óleo pré-shave, espuma de barbear aquecida, finalizada com a linha de produtos para barba da La Mafia.',
                price: 'R$ 25,00'
            },
            {
                titleDetails: 'PACOTE DE BARBA',
                description: 'Pacote com 4 serviços de Barba Navalha, válido por um período de 60 dias (desconto de 20% do valor real).',
                price: 'R$ 25,00'
            },
            {
                titleDetails: 'BARBA NAVALHA + PIGMENTAÇÃO DE BARBA',
                description: 'Tradicional técnica de barbear somada a pigmentação de barba. Começando com uma relaxante toalha quente, óleo pré-shave e espuma de barbear aquecida. Processo finalizado com massagem relaxante para ativar a circulação utilizando a linha de produtos para barba da La Mafia. Após ter a barba feita iniciamos o processo de pigmentação da barba que consiste em camuflar a falha causada por estresse e desordens orgânicas de forma rápida e sem a necessidade de uso de medicamentos.',
                price: 'R$ 25,00'
            },
        ]
    },

    {
        id: 3,
        imgLogo: maquinaIcon,
        imgFundo: maquina,
        title: 'MÁQUINA',
        serviceDetails: [
            {
                titleDetails: 'MÁQUINA',
                description: 'Corte de cabelo com apenas uma gradação(um pente) de maquina sem uso de tesoura, mais lavação com Shampoo e Condicionador La Mafia. Finalização com produtos da linha La Mafia Barbearia.',
                price: 'R$ 10,00'
            },
            {
                titleDetails: 'MÁQUINA + BARBA',
                description: 'Corte de cabelo apenas com maquina (Wahl e Andis importadas) mais lavação com Shampoo e Condicionador La Mafia. Somado a tradicional técnica de barbear com navalha.',
                price: 'R$ 10,00'
            },
            {
                titleDetails: 'MÁQUINA DEGRADÊ (FADE)',
                description: 'Corte de cabelo com 3 a 4 gradações de pentes da máquina ou navalha, sem uso de tesoura, resultando no efeito visual chamado degradê. Lavação com Shampoo e Condicionador La Mafia. Finalização com produtos da Linha La Mafia Barbearia.',
                price: 'R$ 10,00'
            },
            {
                titleDetails: 'MÁQUINA + BARBA NAVALHA + SOBRANCELHA',
                description: 'Corte de cabelo apenas com maquina (Wahl e Andis importadas) mais lavação com Shampoo e Condicionador La Mafia. Somado a tradicional técnica de barbear com navalha e serviço de sobrancelha.',
                price: 'R$ 10,00'
            },
        ]
    },

    {
        id: 4,
        imgLogo: acabamentosIcon,
        imgFundo: acabamento,
        title: 'ACABAMENTOS',
        serviceDetails: [
            {
                titleDetails: 'ACABAMENTOS',
                description: 'Velho e bom “pezinho” ou “pé de cabelo” a navalha como era chamado antigamente, contorno do corte apenas feito com navalhete e lamina descartável importada.',
                price: 'R$ 10,00'
            },
        ]
    },

    {
        id: 5,
        imgLogo: sobrancelhaIcon,
        imgFundo: sobrancelha,
        title: 'SOBRANCELHA',
        serviceDetails: [
            {
                titleDetails: 'SOBRANCELHA',
                description: 'Remoção apenas do excesso dos pelos, mantendo as linhas naturais, velha “aparada”.',
                price: 'R$ 10,00'
            }
        ]
    },

    {
        id: 6,
        imgLogo: pigmentacaoIcon,
        imgFundo: pigmentacao,
        title: 'PIGMENTAÇÃO DE BARBA',
        serviceDetails: [
            {
                titleDetails: 'PIGMENTAÇÃO DE BARBA',
                description: 'Técnica de pigmentação da barba que consiste em camuflar a falha causada por estresse e desordens orgânicas de forma rápida e sem a necessidade de uso de medicamentos.',
                price: 'R$ 10,00'
            }
        ]
    },

    {
        id: 7,
        imgLogo: deliveryIcon,
        imgFundo: delivery,
        title: 'BARBER DELIVERY',
        serviceDetails: [
            {
                titleDetails: 'BARBA',
                description: 'O Barber Delivery é um serviço oferecido, desde 2017, àqueles clientes que queiram o atendimento e excelência no serviço, mas não conseguem se deslocar até a barbearia. Atendemos à domicílio, hotéis, empresas e hospitais, aonda você estiver para poder desfrutar de toda a experiência La Mafia onde estiver. Nossos atendentes entrarão em contato, previamente, para confirmação do serviço. Para tirar suas dúvidas e fazer o agendamento, procure a unidade mais próxima a você.',
                price: 'R$ 10,00'
            }
        ]
    },

]

export {dataServices}