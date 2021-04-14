import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Chart from 'chart.js/auto';

import { ImMeter, ImSearch } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdFeedback, MdDashboard, MdSchool, MdAddCircle } from 'react-icons/md'

import Button from '../../components/Button';

import database from '../../assets/database/database.json';

import { 
  Card,
  Container,
  DashboardHeader,
  CardLine,
  CardHeader,
  ProfileHeader, 
  OptionsContainer,
  Option,
  Divider,
  Input,
  ChartContainer
} from './styles';

import profileImage from '../../assets/images/profile.png';
import { format, isSameDay } from 'date-fns';


function Dashboard() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("user");

    history.push("/");
  }

  function splitInDays() {
    const registries = [];

    let lastDate = new Date(database[0].date);
    let registriesInDay = [];

    database.forEach(data => {
      data.date = new Date(data.date);

      if(isSameDay(lastDate, data.date)) registriesInDay.push(data);

      else {
        lastDate = new Date(data.date);

        registries.push(registriesInDay);
        registriesInDay = [];

        registriesInDay.push(data);
      }
    });

    return registries;
  }

  useEffect(() => {
    const data = splitInDays();

    const consume = [];
    const currents = [];
    const voltages = [];

    data.forEach(registriesInDay => {
      const registriesValues = registriesInDay.reduce((accumulator, currentValue) => {
        const consume = currentValue.kWhA + currentValue.kWhB + currentValue.kWhC;
        const currents = currentValue.IA + currentValue.IB + currentValue.IC;
        const voltages = currentValue.VA + currentValue.VB + currentValue.VC;

        return {
          consume: accumulator.consume + consume,
          currents: accumulator.currents + currents,
          voltages: accumulator.voltages + voltages
        }
      }, {
        consume: 0,
        currents: 0,
        voltages: 0
      });

      consume.push((registriesValues.consume / registriesInDay.length).toFixed(2));
      currents.push((registriesValues.currents / registriesInDay.length).toFixed(2));
      voltages.push((registriesValues.voltages / registriesInDay.length).toFixed(2));
    });

    const commomConfigurations = {
      data: {
        labels: [
          format(data[0][0].date, 'dd/MM/yyyy'),
          format(data[1][0].date, 'dd/MM/yyyy'),
          format(data[2][0].date, 'dd/MM/yyyy'),
          format(data[3][0].date, 'dd/MM/yyyy'),
          format(data[4][0].date, 'dd/MM/yyyy'),
          format(data[5][0].date, 'dd/MM/yyyy'),
        ],
      }
    }

    const chartElement = document.getElementById('chart');
    const averageElement = document.getElementById('voltages_chart').getContext('2d');
    const currentsChartElement = document.getElementById('currents_chart').getContext('2d');

    new Chart(chartElement, {
      type: 'line',
      data: {
        labels: commomConfigurations.data.labels,
        datasets: [{
          label: 'Consumo (kWh)',
          backgroundColor: '#5BA885',
          borderColor: '#5BA885',
          data: consume,
        }, {
          label: 'Meta de consumo (kWh)',
          backgroundColor: '#45D6BE',
          borderColor: '#45D6BE',
          data: consume.map(consume => consume * 0.85),
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

    new Chart(averageElement, {
      type: 'bar',
      data: {
        labels: commomConfigurations.data.labels,
        datasets: [{
          label: 'Consumo (kWh)',
          backgroundColor: '#5BA885',
          borderColor: '#5BA885',
          data: voltages,
        }, {
          label: 'Meta de consumo (kWh)',
          backgroundColor: '#45D6BE',
          borderColor: '#45D6BE',
          data: voltages.map(voltages => voltages * 0.85),
        }]
      },
      options: {
        responsive: true,
      },
    });

    new Chart(currentsChartElement, {
      type: 'bar',
      data: {
        labels: commomConfigurations.data.labels,
        datasets: [{
          label: 'Consumo (kWh)',
          backgroundColor: '#5BA885',
          borderColor: '#5BA885',
          data: currents,
        }, {
          label: 'Meta de consumo (kWh)',
          backgroundColor: '#45D6BE',
          borderColor: '#45D6BE',
          data: currents.map(currents => currents * 0.85),
        }]
      },
      options: {
        responsive: true,
      },
    });
  });

  return (
    <Container>
      <div>
        <div>
          <ProfileHeader>
            <img src={profileImage} alt="user_profile"/>

            <div>
              <span>Bem vindo,</span>
              <strong>Douglas Brandão</strong>
            </div>
          </ProfileHeader>

          <Divider />

          <OptionsContainer>
            <Option active>
              <MdDashboard size={20}></MdDashboard>
              <span>Home</span>
            </Option>

            <Option>
              <FaHome size={20}></FaHome>
              <span>Instalações</span>
            </Option>

            <Option>
              <ImMeter size={20}></ImMeter>
              <span>Meus medidores</span>
            </Option>

            <Option>
              <MdSchool size={20}></MdSchool>
              <span>Tutoriais</span>
            </Option>

            <Option>
              <MdFeedback size={20}></MdFeedback>
              <span>Feedbacks</span>
            </Option>
          </OptionsContainer>
        </div>

        <div>
          <Divider />

          <Option onClick={logout}>
            <AiOutlineLogout size={20}></AiOutlineLogout>
            <span>Logout</span>
          </Option>
        </div>
      </div>

      <div>
        <DashboardHeader>
          <div>
            <div>
              <h1>Energy Manager</h1>
              <h3>Resumo de suas atividades</h3>
            </div>

            <Input>
              <ImSearch></ImSearch>
              <input placeholder="Search"></input>
            </Input>
          </div>

          <div>
            <Button width="200px">
              <MdAddCircle size={20} />
              NOVO MEDIDOR
            </Button>
          </div>
        </DashboardHeader>

        <CardLine>
          <Card>
            <CardHeader>
              <h1>Consumo</h1>
              <h3>Confira seu consumo médio nos últimos dias</h3>
            </CardHeader>

            <ChartContainer>
              <canvas id="chart"></canvas>
            </ChartContainer>
            
          </Card>
        </CardLine>

        <CardLine>
          <Card>
            <CardHeader>
              <h1>Tensão</h1>
              <h3>Confira a tensão média da instalação nos últimos dias</h3>
            </CardHeader>

            <ChartContainer>
              <canvas id="voltages_chart"></canvas>
            </ChartContainer>
          </Card>

          <Card>
            <CardHeader>
              <h1>Correntes</h1>
              <h3>Configura a corrente média da instalação nos últimos dias</h3>
            </CardHeader>

            <ChartContainer>
              <canvas id="currents_chart"></canvas>
            </ChartContainer>
          </Card>
        </CardLine>
      </div>
    </Container>
  );
}

export default Dashboard;