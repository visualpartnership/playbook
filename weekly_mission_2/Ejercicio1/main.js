const repo={
    name: "LaunchX",
    autor: "HéctorBS",
    language:"Javascript",
    numberOfCommits: 100,
    starts:199,
    forks:299,
    issues_open:10,
    issues_close:10,
    getTotalIssue: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was create by ${this.autor}`;
    }
}

console.log("Nombre del repo "+repo.name);
console.log('Issues totales '+ repo.getTotalIssue());
console.log(repo.getGeneralInfo());
console.log(repo);


const issue={
    title: 'Issue',
    repositoryNameAssociated:'LaunchX',
    status: 'Week2',
    numberOfComments: 0,
    labels: 1,
    author: 'HéctorBS',
    dateCreated: '26/04/2022',
    lastUpdate: '26/04/2022',
    getTitleAndAuthor: function(){
        return `Repositorio from ${this.repositoryNameAssociated} created by ${this.author} title: ${this.title}`;
    },
    getGeneralInfo: function(){
        return `${this.title} of ${this.repositoryNameAssociated} week: ${this.status} author: ${this.author}`;
    }
}
console.log('');
console.log(issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
console.log(issue)

const pullRequest={
    title:'Backend',
    branchName: 'Main',
    dateCreated: '16/04/2022',
    status: 'actived',
    repositoryNameAssociated: 'LaunchX',
    getStatus: function(){
        return `${this.title} status: ${this.status}`;
    },
    getTitleAndAuthor: function(){
        return `${this.title} author: ${this.author}`;
    }
}
console.log('');
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
console.log(pullRequest);

console.log('');

console.log('Twitter');
const twitter={
user:{
    user:'HéctorBusSan',
    username:'Héctor',
    bio:'Development Software',
    age: '21',
},
trending_topic:{
    title:'trending',
    number: 100
},
hashtag:{
    title:'#hashtag',
    number: 1000
}
}
console.log(twitter)

console.log('Facebook');
const Facebook={
    user:{
        user:'HéctorBusSan',
        username:'Héctor',
        bio:'Development Software',
        age: '21',
    },
    post:{
        title:'Post',
        number: 56
    },
    biography:{
        name:'Héctor',
        username: 'HéctorBusSan',
        bio: 'Development Software',
    }
}
console.log(Facebook)

console.log('Uber');
const uber={
    profile:{
        user:'Raul',
        username:'Raul966',
        bio:'Driver',
        age: '50',
    },
    travel:{
        kilometers: 0,
        driving: 100,
        drived: 10
    }
}
console.log(uber)
