import React from 'react'

import { styled } from '@mui/material/styles'

import { useQuery } from '@apollo/client'

import Link from 'next/link'

import { QueryTotalRequestsArgs, RequestStatus } from '@lumina/api'
import {
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import { GET_REQUESTS } from './GET_REQUESTS'

import { CardGiftcardTwoTone } from '@mui/icons-material'
import invert from 'invert-color'
import { Stats } from './Stats'

const PREFIX = 'SubmittedRequests'

const classes = {
  list: `${PREFIX}-list`,
  a: `${PREFIX}-a`,
  icon: `${PREFIX}-icon`,
  number: `${PREFIX}-number`,
}

const Root = styled('div')(({ theme }) => {
  const color = theme.palette.info.main

  return {
    [`& .${classes.list}`]: {
      '&:hover': {
        '& $icon': {
          color: invert(color),
        },
        '& $number': {
          color: invert(color),
        },
      },
    },
    [`& .${classes.a}`]: {
      '&:-webkit-any-link': {
        color: 'inherit',
      },
      textDecoration: 'none',
    },
    [`& .${classes.icon}`]: {
      color,
      fontSize: '5rem',
    },
    [`& .${classes.number}`]: {
      color,
    },
  }
})

export const SubmittedRequests = () => {
  const variables = {
    where: { status: { equals: RequestStatus.Submitted } },
  }

  const { data, loading } = useQuery<
    { totalRequests: { count: number } },
    QueryTotalRequestsArgs
  >(GET_REQUESTS, {
    variables,
  })

  if (loading) {
    return <CircularProgress></CircularProgress>
  }

  if (data) {
    const icon = <CardGiftcardTwoTone className={classes.icon} />
    return (
      <Root>
        <Link
          href={{
            pathname: '/admin/requests',
            query: {
              args: encodeURIComponent(JSON.stringify({ ...variables })),
            },
          }}
        >
          <a className={classes.a}>
            <Stats
              title="Requests Submitted"
              value={data?.totalRequests.count}
              icon={icon}
            ></Stats>
            {/* <List className={classes.list}>
              <ListItem>
                <ListItemIcon>
                  <CardGiftcardTwoTone className={classes.icon} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    className={classes.number}
                    component="span"
                    variant="h2"
                  >
                    {data?.totalRequests.count}{' '}
                  </Typography>
                  <Typography component="span" variant="h4">
                    requests currently submitted.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List> */}
          </a>
        </Link>
      </Root>
    )
  }
  return null
}
