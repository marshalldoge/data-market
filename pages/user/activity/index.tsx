// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import Navbar from '../../../components/navbar/navbar';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { readUserReport } from '../../../api/reports';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import FunctionsIcon from '@mui/icons-material/Functions';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
const data = [
    {
      "id": "japan",
      "color": "hsl(239, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 68
        },
        {
          "x": "helicopter",
          "y": 169
        },
        {
          "x": "boat",
          "y": 36
        },
        {
          "x": "train",
          "y": 65
        },
        {
          "x": "subway",
          "y": 130
        },
        {
          "x": "bus",
          "y": 126
        },
        {
          "x": "car",
          "y": 68
        },
        {
          "x": "moto",
          "y": 9
        },
        {
          "x": "bicycle",
          "y": 101
        },
        {
          "x": "horse",
          "y": 281
        },
        {
          "x": "skateboard",
          "y": 48
        },
        {
          "x": "others",
          "y": 120
        }
      ]
    }
]
export default function SignIn() {
    const [submissions, setSubmissions] = useState({data:[],total:"",average:""});
    const [points, setPoints] = useState({points:[],total:"",average:""});
    const [referralPoints, setReferralPoints] = useState({points:[],total:"",average:""});

    useEffect(() => {
        readUserReport("618df0b0bc31fe1ced04f827").then( (res) => {
          var aux;
          const color = "hsl(239, 70%, 50%)"
          aux = res.data.submissions;
          aux.data[0].color = color;
          setSubmissions(aux);
          aux = res.data.points;
          aux.points[0].color = color;
          setPoints(aux);
          aux = res.data.referralPoints;
          aux.points[0].color = color;
          setReferralPoints(aux);
          console.log(aux)
        }).catch( (error) => {
          alert(error);
        });
      }, []);
    return (
        <>
        <Navbar />
        <header className="flex bg-gray-900 m-5 p-5 shadow-lg rounded-lg">
          <h1 className="text-2xl text-teal-400">Actividad del perfil</h1>
        </header>
        <div style={{height: 400}}>
        <ResponsiveLine
        data={submissions.data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'fecha',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cantidad',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Envios totales
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {submissions.total}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <TimelineIcon/>
          </Avatar>
        </Grid>
                <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Media de envios por dia
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {submissions.average}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FunctionsIcon/>
          </Avatar>
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
    </div>
    <div style={{height: 500}}>
    <ResponsiveLine
        data={points.points}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'fecha',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cantidad',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Puntos totales
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {points.total}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <TimelineIcon/>
          </Avatar>
        </Grid>
                <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Media de puntos por dia
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {points.average}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FunctionsIcon/>
          </Avatar>
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
    </div>
    <div style={{height: 500}}>
        <ResponsiveLine
        data={referralPoints.points}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'fecha',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cantidad',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
            <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Puntos totales
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {referralPoints.total}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <TimelineIcon/>
          </Avatar>
        </Grid>
                <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Media de puntos por dia
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {referralPoints.average}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FunctionsIcon/>
          </Avatar>
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
    </div>
  
    </>
    );
};
