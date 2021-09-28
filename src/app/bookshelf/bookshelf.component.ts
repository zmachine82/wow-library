import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  selectedBook?: Book;
  myBooks: Book[] = []



  constructor() { }

  ngOnInit(): void {
    this.myBooks = [
      new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'data:image/jpeg;base64,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'
      ),
      new Book(
        'Book of Testing 2',
        'Owen Wilson',
        'Drama',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUYFxcZGhoaGhoaGhoaHBkaFxogGhoaGhohICwjGhwoHRoZJTUkKC0vMjIyGiI4PTgxPCwxMi8BCwsLDw4PHBERHTEoIygxMTExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABQEAABAwIDAwgEBw0GBQUBAAABAgMRACEEEjEFQVEGBxMiYXGBkTKhscEUI1Jzs9HwJCUzNDVCYnKCg7LD4VN0kpOi8RUXVLTSQ0RjZIQW/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EADIRAAICAQMCAwUIAwEBAAAAAAABAhEDEiExBFETQXEiYYGh0QUyMzRCkbHBJPDxQyP/2gAMAwEAAhEDEQA/AJ9C70ulX+1R3SxejIxkbq+cab4PYJIgdxoZajmUZiFT4cbb/KnQbXABWZE379N+7toPbazVY9Si2k0aDp6qZ9MEOJBWd5i5sLCTewnUkV1t5sgjpk7rkj8wBZIkxGVSTa1CrMSSBSqE3FRIeQQIxG/dwBUDqZi2pP5vbSiHkKcVleEiOqDpYEb7i4NhvgzW0mHgHxivCnZN5qvNYttS1K6X0lBQJCkmCABEwYOYXFr2p41iG1GU4hJ9HRQgnXjBn3UziKSpTXUibVFreRlGbEo1g9YAdWSbZ9YUn1SKP8IbbCgvECYVcnTJBVodQCm3basoCtkpQpi4xCUnpYTEb96CJnNpPWvwgRXXkyVEPZdLAiE7+O+s40Cx6KPUeYUc3SiFZYTPcYidTHDjXVIGVKQ9lJBIIIuFqBBifCe2ikBj+hTEpuodKoGSOtmAmc0JuJ6sDq0GykAku6hSb2vJuBNz3UaBY+iuxTJtkq9F2bJ000g6K3ka62N6P8FXJ+MVfTs6pHHiQfDxrUax1FCKK01AEnMQIzEX7fZSkUKNYWhXYrlajWZ+2rMqOM08RIAHbrbf7qj2FpCxBtUj0h0EE+zvqWSbTOuMdhZC+E2tvInupRLgkG88KSaI0BMfbU0oWyDOtRc7Y+kXUhCjKkiQCJ4A6iujDtOGSgE3vfeAnjwSkeFR7GPQp1TGYFxKAsg36pJFu0WPcoU7gi8W4gUz1RFpMejCt5cuWQZJkkyTMkkm56x86MlpCTmA61xJJJMhIMk6+gnyprtLaKGGlOrnKnLMQPSUE6kgamoV3lglIzLweMQgXKy0MqRxJCrCqwhkmriJJxjySLGEbDhTksDYEqMZSkga3Ayi2lhUwrCNqABSLKChrqE5QfK1Quz8Uh5QcbOZCuskiRIPZuPZU3hn51EA2jfQcpJ0wNKrQonBN6ZBcR6gI8gKTTs9oFQCImZuq+YQZvwpq7thAxRwpSrOGumzQMpTmyxMzm8KkWnwsFRBtaeNuHZxp7a2exL3hykWm8EETOo9tJllAtECxFzY9l7d4oBeYgaD195NLoQJ0pVK+AtVyINYdA0Rw4xbSjqYFlEaRYE7tN9yONOAKC0SIp02JasKphBIJSCQcwPAxEjgYApM4JEi0RNgbGePG9++m+z8cVocUpp1sNqWmHEgFYQJzovdJ3GjbG2ojE4dGJQlaULBUAqAqEki8EjdxqmliWh4hoCYETr5z7zSoFR2wNrIxbCMQ2laUrzQFgBXVUU3gkbuNSUUWmnTBdnIoRXaFAIWhRooUDWZsg5iElMd1on7aVJYZICYEiaY4WZAm39KYvcqMM0tTayvMglJhBsQYMGb1zOEsm0VZ6CajyWNDAgCjY7EpabW6rRCSYG/gB2kwKbbOxbbiEuIUSlUkTqYJBkbtDTjFMtvIKFpzJ1KSSAY48RXNTU6lxe4z+7sZunElsoxhQ98J6VS3ZSoNllQylAVwCRY7p7BWqYd5Cm0LSQUKSFJI3giQfKqxieW2DWjKS4UkXGQwQRcHsp+y82zhQtKVdElGe5JOQjNoSTXf1GqaVxafC9O3w8iGOOlvcR5bOBeCcAIAOSSdPwiffbxqZdx7aWipSgEJT1pIAjLeZqubP2hhscVsJKjbOoEKSCEKTeZF8xTalNp8m9nsNqecbMJjMoLcV6SgB1c15UfUaEUkljnad9u9Ak3dor+wQDs9lpbanC44oIQFlvN1zAUvck++n2HwDmFxuGKGPg6HHChaUPFxtaYAGZKrhQJF71IbKxOFxhLbaTlbCSBBbyi4GWDawNq5iMZs3C4g9IHS8gpJUS45qApMSYAuLV0a5apKnbt16/H+iTjshNewEL2qtsuPZVYYuSHFBQUXbJSrUIuYTpai7awy3doJw6mXMSy1h0ZGulDYJ0LiiVJzHcbzvpbaHKbZb60Lc6ULQIC0pcSqOBym47DOpqdwPwHG5VNuBa20ZQQpSHAjTrAwSNbkbzxptc405J8Vx8xJQGXIrAvMuvoU0ppiEdG2p1DpbV+ckEKJAIvfhVxdbCkkESFApI7xB9VQZThdnNOPFJSkqGdQla1EmEySZIlRtoJNR45x8B8pz/LNTcZZHqijcbEQ7iH2cKrAslan23SEGTmU0j46QTxII32BqR2Tjxj9otOpPxeFw4UoA2D79ikjfCUnxTS2yuUWy3MV0yVlD605MywtCSLARPUCrATY1ZdlbFYw3SdC3k6RWdd1KlW7UmANwFhVW1FO1v9eSTTKvsXZ5dw+PbWt1IOKdUkoWUKgAEAEfm2iBrReb7YyRg2sR0jxVkcGTpD0USpMhv0dL99KNcsNm4Rx5pPSJV0rhc6q1guZoWQSTAkaC1R2z+U+yGFlbXTonN1QHCjrWMIJgeFU9tpqmbS+xHbM5LsubHViXS4XW231t/GKyNqbzEFCQcoBKZNpJJrQ+SrynMFhVqUVLUy2VKNySUCSeJpnycdweKwi2sOlXwfrtKSrMk9dMrAJOa4XrO+orDcvtmsISwguJQ0OjSMilQEdUCSZOmtablNNU+f2AotMu9Cqc3zlbPJguOJ7S2uPVJqz7O2i0+jOy4lxGkpMweBGoPYa53CUeUMOqFcNCksJnuBHWFZpygT91P/ADjn8RrSsGbiKzfbyCcU/vPSOeomn6L7z9Dumi88hF5sIBBJQtafMhYnj6WlS203VIYdXplbWbWiEmI7NKr3No91X2+CkL7OsCk/wipvlyvJgnTvVkTr8pYn1TUcsf8AJ092vmb9JkYNq1vFqT/ws3M/Bb9/RismKDE7jp2xWs4lB/4Yq1vgsz+7/pXb1L3h6k4op3N0qMWvtZWOP56KtvLNZGCdEWlHqcTpVW5tm5xat/xK7ftoq48vW5wLxgiOji9vwid1Rz/mI/AKVRZWuaxXxr9/zUfxKqI5xFRtB7ub+iTUzzVD418foo9qqhOcYffF/ub+iTV4fmX6fQnL7qLq1zaYdSAeneBIB/MIkidMtxVBxAd2fjCAqVsOCCLZkwFabgpBuO2t1wp+LR+qn2CsV5xR93v/ALv6NNL02WU5OMt0CjRucZQOzXFDQraI8XE1ROQPJZrHF7pFuI6Po4yZb588zmSfkD11eecAfelX7n+NNQvMtri+5n+ZRxtxwtrv9BW3TIPl3yOGBS2424pba1FBC4zJVBULgAFJAO60b5q/81+01v4EBZKlNLU1JuSkBKkeQUE/s1H88Y+42fnx9G5Q5mz9yPfPn6Numk9WK5CPeNmcbRZDu03WySA5jFoJGoC3ykkdt60f/lRhP7fEebf/AIVnb/5XV/fz/wBxXoMzx8qfPOUK0gtkPyY5Ot4FpTTa1rCllZK8pMlITAgC0JFYbsrZ6cRjkMLKkpcdUklMSBKtJBFeiUK3cKwLkmPvoz8+r2qpMEm1Jhje5dcdzUM9GosvudIASkLyFJI0BhIInjuqp82e0VtY9CASEOy2tO4mCUkjiFCJ7TxrdawDkiPvmx88faqjjm5xkpBjumb6aFdihXBYDOcAesKpC0BW0igkQp9Sb8FKI99XbAemmqMpX30//V/Mp+j5l6HdkdEjzevFOJcbNpbMj9JCk29aqmucR8jDttk+k5MdiUn3kVX9mK6HauWYHSuJ8FhRSP8AUnyp1zjYmXGkfJQpXD0lQP4DVpQvqIy7qxU9iv7TYytYfiptSz+06uPUBWl4gg7MVeIwunH4vU8aofK1otqw6DqnDtjxEz660DFtD/hilf8A1P5VbM70P3/2ZFS5sPxxfzK/pEVcucD8nvfu/pE1TebH8cX8yv6RFXPnAH3ve/d/SJqeX8xH4AZU+aj8K/8Aqt+1VQnON+UH+5v6NNTfNQPjXv1Ue1VRHOEkf8Qfn/4vok10Rf8Aky9PoI1aSNqwifi0fqp9grE+cNQO0MRG4oHiG0zTx/lPtRtuVqcbRAAUWQkaWhRRrFH5D8mVY14vOLBbbWFOSZW4s9bKew71HtjsXDi8JucmK1W7LvzgiNlKB1lr+NNQ3MvrjJ4MfzKnuckfe10/pN/SJqB5mdcX+5/mUIfgv/ewj+6yQ53x9yNfPj6Nyuczg+5Xvnj9Gijc8P4o18+Po3K5zN/ijvz5+jRTL8EVv2DP30/fc/38/wDcV6BNedtvIUcc+G56Q4pzJlkKz9KrLlO4zEVOYLA7ZDjeb4blC05pccIy5hM9e4iq5Ya0t6NNcG2AVgfJT8ps/Pq9qq3yvODDriMVnZnpUuKKAlOc5sx0TBnfaKj0+6kgwV2ejVGsD5HnNtLDkXl0nw6xnypxtflNtMoLb63G0rBEFoNlSdCJygkXgwd9Wnmx5KwU45wpMpPRJBmJlJWrgYkAdpmmjHwoNt8jadEXZpgoUKFcNkjNMARmTM+F/CqQR99gNPusfSVd9mfhE9/uqkq/Kw/vY+lFP0T9qfod2Xheo95XI6DaiHBNyy5PcQk/wUflmQ9tRLWt2W/8RBP8dOedZjrsOfKStH+Egj+I1H8m3TitqIcO9Rc7ghFvWBXVjd4o5e0Wv2/4R4k4+8d850DFIA/sh/GurnivyUr+6fyqpXOl+NN/NJ/jXV3xQ+9Kv7p/KqEvuYn7yl7spfNb+Nr+YX9Iirty/wDxB7939ImqVzV/ji/mF/SIq7c4Ntnvfu/pE0c/5iPwFTKnzT/hXv1Ue1VRHOL+UH+5v6JNTPNN+Ff/AFW/aqobnGP3wf7m/ok1aP5h+n0N2NN5Y4XpNlujeltC/wDLKVn/AEg+dU/mfxYS++z8ttKx3tqj2OeqtM+DBzDls6LayHuUiPfWJ8gMSWtoszbMpTau9aSmP8WWlxK8cokU7TRpfOX+THf1m/pE1X+Zb/3fcx/Mqw85n5Nd/Wb+kTVf5lzfF/uP5lbH+AwfpZJc8H4o18+Po10OZ8/cjvz5+jbrnPD+KNfPj6NyhzPfijvz5+jbpv8AxN+gz7EH77qv/wC+P/cVv9efXk/fdX9+P/cV6DrdV+kWTBWBclB99Gfnz7VVvtYFyV/KjPz59qqTp/uy9PqGPDLvzxYWWWHfkuKQe5xM+1FPeaPF58CUHVpxafBUOD1qV5U/5y8L0mzXoElGRwfsrE/6SqqbzMYyHsQyfz20OD92opPj8YPKmS1YH7gXcaNbNCgaFcQDNNmnrp+26qST99x/ex9IKuuyx8Ynx/hNF/8A5Nn4R8J6RzP0nSRKcubNmj0Zie2kwdRDFKWvzVHo5ISklXcJzoYfNhELH5jgnuUlSfblqC5qsNmxLi9yG48VqHuSave2MEjEsqZcUUpVlMpiRlUFCJBG71035N7BZwefo1qUV5ZKym2SYiAPlGti6yK6Z4/P+v8AbJyxvXZTOdL8bR8yn+NdX5OGU5swNp9JeFCU9pLVh50x2/yYYxbgccdWkhARCCiIBJ3pN+tU/gQhtCGwuQhKUAkiSEiAT22p5dRF44KPKFa3Zj/IfbLeExYcckIUhSFEAnLmKVAwLm6QLcatvLzlbhXcIphlzpFuFEkBQCUpUFEkkC9ojtqQ23yJwmIWpxKyytRlWXKUqJ1VlOhPYRUfhebRgEFzFLWOCUpRPZMmuvxcM5LI7teRJ7DfmmYMvLPonIgdpTJP8Sar/OOfvg/3N/RJrUNnMssqDTYShCLAA+ZJ1JJvJphtvkRhcW+t9bziVLyyEqbgZUhIiUk6DjU8OdPNKb4/4NP2aLhhFdRH6qfYKwLbk4faDih/6eILiQOAczp9UVvSVISkJCxYAC43CKqW2+QmFxLy8Q484la4JCFN5ZSkJtKSdBxo9PkUZPVwSTQrzmLB2a4RpmbM97iapXNryjw+DOI+ELUnpOjywhSpyZ82gt6Sa0naOx2sRhE4RbqsgS2M4Kc56OCCZESSm9qrX/LDBf8AUvf4mv8AwqmGcFBxl3+gLXBAc4nLBnGIbZYCihC86lqGWTlKQEg30UZJ7Kt/NTg1N4LMoEdK4pxP6uVKAfHIT3EUls/m82e2oKUpbsXAcWnL4hIE9xq4suoEgFIAgACAAALADdQy5Y6VCBm1VIwXHvJb2o44v0UY1a1HWyXyo232Far/AMx9n/2q/wDLc+qo/Hc3eDddcdViHQpxa3CApuAVqKiBKJiTSB5ssF/1D3+Jv/wp5zxTS1M1plx2Ft9jGJUthRUEEJVKVJuRO/srF+Sn5UZ+fV7VVrfJbYLGBQtDbilhago5ymQQItlAtUVs3kHhWcQjEpecK0LKwCW8smbGETF+NThkhDUlw+AJpWWfbuG6XDPt/LacSO9SCB64rFubTGFvaDXBwLbP7SSR/qSmt06QcRVJwHNzhmnm3kPPBTawtIlGWUmY9CY3a6UuHLGMZRl5mTpF5oVwGhXKAzjADrpvJ9vVqeRUFs5PXT4+w1PJryeoftHtLgVRSmakUmlBUlJ0I0KhUV1K19JEHJGtvS14zEW01NEBvSyF1fFNeZGaGyXXQn0cxJHpXiQqfRHHKI3TNOelcvYW06pOqiJgHrQkC2+fCjBdKpXXVHKiMosh1rc6UlIvlMptZRA0PEGal1PudaE6TFj8lcA361wi4j0oqOSr7oP23CptNPilz6gyrj0EXVLziCqIRoBlPWOeTu6sb+GtIjEvFBJQAeta/C3kZuNY3U+Uq1N3XrWNVlkSIxjYknEO5fRAVkJFiQVXjUjLomx+VrajqfcAOVANlET2LIAgX9Eg+BFBb8eVFafml8ZXQ/hOrDuuu5EFKRm1UN0aDW6bkK7kkUiMW4MyQkFYQhRsblVoCQb3Ss+Ke2nyl0ghySaLyKxVDYKcQ7mAyCOtOsxJjSwtlPbMWilGMQorKVR1UpJjiocJMQQrzT21wuXFKpWDW8RMDhQtmoZqSmuFVDUbSKTQBpPNXQaNhoVmuUUKoUwtFCwHppte/sPbUyk1C4RULBOnnqDUsFV5Gfk9ePAqDRkqpIGgg1FILQvNdCqSzV0qppC0OUqpZCr0ybVSgcA7KpCdLcnKA2C/uk/bcKmy7YntqtIdl8n7aVMhyw766IzoTJjuh4691T3VmnL/AJUOMrSwyrIrKFLWIJuTlSCdNCSe0VennjesH5QY9T2IccUIJUQANwT1QPIV6P2fjWbLclaivmc+b/5w25ZauRvKrEKxCWXnC4hyUgqiUqglJB1IMRB4itMacisB2YtQfbKbKC0R35hFbwDW+1ccYTjKKq1/A/SSc4tMeKxJPvozTtzTKjJVXlrI7Ol41Ww9DulOA5FRDj2WJBud1Os81VSaVkpY0PlLtXUqpqV0ohVqeM9ybhSF5owNIJpUGqpiNCmau0nNCmsXSUrCemPH2VJA1DtWi5iZHjUih0HRQPjf6683LHez0YscZqCTTdBkxRlLjvqWkcWK64ldIBZNDNRoKQ5C6KXPAU3LtFzdvvrKAaEml/Gk9/sqVbd07KhMOv4z7cKkkKqk/Za9AKNog+WXKZWFCEoSlS1hRlUwkCBMbzJ9VZItZJJNyTJPadavHOawQ4y5NihSI4FJn15vVVFNfVfZuOEcClHl8v4ni9XOTyOL4QAa0zkFyjcfUtl5WZQSFJMAGEwlSTGuoPnWYk1a+bYTjJvZtZ9aRfz9lU67HGeGTkuFsT6bJKORJebNaNDNRCqiquCOyvkG+x7tDJGMKjKtBoB76l2ncwBiKrSLEgnQxU5ggQi++9deVJLYgt+SQSqjJNJN6U4QmljuJLYUbFKGiDso8VePBBnU12gKFNsAoSIBtKeF7acdx0p4hWWJGshO/cJ7r1GtFO8Wnjr2jiaXDqRdJvpO8cbfbWuacbOuJINuAyRxGlBZmZ4Coxl2FEce2DHGNDalQ8STu74k9un2vUniaZVSHyRA7qTU5HZSYemkXH7x5+FBQdlNqFi9YR/tNKTJAFt5gx7r0z6Tz19XCkOmkwLTT+HYNVDhDkuRHlr6PHfT9lcmQbdtRbHpyLXt5U7S8M3nMdpFDJG+OwYcblY5znB0bI35lkdwSAfWU1QdpMdG4pAMhJiQZ3A++rTzjOS40P0VetX9KpijevqPs2Gnp4fH+TwetleWXw/g4TVy5PKThtoNCeo402JGkutpNuzpKptTjb0tYd7ey50ajN8ubpWz9KP2RXVnhqjpfDTX7kMMqlfambPNDNSKlVzNXw+l2fTeRHqZMqPyTHmYqaaNkjsHsqMbuhZ4r94qVbGlXnJtUyKSW46aVTpFNENngaeIQr5J8qaCfYhkaFkihRgyqND5GuFlXyT5GutRlXBz6l3AmhRkMK+SfKhRUJVwLqj3MyQ4nSY8bHsjdePKlUqNjCbdt9N9R4Ue+lVLMiRoALT9dBwOtMfNKHpC5AO88N320opWYuEm8nhO/wAd1qjlrM6kg8LaUVOIOp3Tr29utbwjayR+EqAJiw4309u4UOmzXBHcDP27qjlLK4CeG+1hbwtTnDpVaUjeNR7r+fb21njSVjRm3sPEdYR5axSJSQZPH7eygTBABBn1UfKVW7DffUqoo2GbWLUZQ+3f7P60RCCCSO813N2cJO7u9R8qDW+wb23KjywZzvAbkMKX33PviqbV62kgrxi0r6ubDqS3F5JBI9ebTsqjxX0vRusaj7l8zwuqXtuXvfyOVPcnGekZxjekMdN4srB9iiPGoIirdzf4QuLxSEkBS8K4gToc6kiDYx31fNWht+VfJkcVuSS95rWxcOlbDTtlZ0IWNfzkgxr9oqYaw7Y0Qk9gAPmarnIzZrjGFSh3q9ZakozZ8iVqlKJFiR43Jq1tFMCJPl7BXh+BjjJqJ6MpycVdkX/w09CW0gFRVmJER3ZvCrC0mwhI8qa9KN8+APtowxXePOrQUYsjJSkh8kHsoxc8KinMbH51+0/0oiX8xkqPmL91U8VLZCeA3uyVOI3TQLx40zbUbcO6fMzRktKUZKoHZNMpNiuEUOC/G+hRVICd58qFG/eComIpV4ca64uZ62nb7vtpTfNRJri8M9HUKFcb6TUqTRJromDT6QWLsrIBgAxc33CpFCxlsTebGdN57+3tqNYQQQcvbHEVI4eCAkbt3eBr9t1RyJDwbDpST1sscftxo4uLWIo5cjtF/Kl2Mp1BM6XF++9hpXMyyEy2eI3a2vH9KcNMjWRPGDbypdCQoiAfUrztw8dKkMPssmVQUjfmSBb7cKKhJ8IZyS5I3oyYIBMcEmwsNe2AfrrKOUGC6LEuoggBZIBEdVXWTbuNb7h8KnRJMWvmkHfvN/DhWd87WEbSrDuJCQtfSBZAEqCcmUqOpid/GvT6BPHLfzPP6xqcdvIzTLWi8ziR8IfJMfFJA7ZXPuqgut5d0Wkdorf+RnJ1jCstrQgJdcab6ReZSlKOUE2JhNybCK9DPJaK7nDijUr7E4GpvI8hu3T7qOEgTAB8D9dLLQnUg03WlpVoPlrHfXBoo69VhisC8p9dJZp4m+4fXupRGFZEEIHH0fC8W3ml0hJskAduWtob7A1JdxshlMwEbtTl91OkYf8ARHto3RA8df1dKcNrO8X87caaONE5zfkBGH4n1ClVJAGnlFGSfVQUOAmraUlsc7k29xoUE7lD/CPZXKcEq7PM/VQqWj1HUmYCqi12gRU0jusLFdSONHCa70e8kCgEOhU+/hw99SLWWdQD7hSOEwOYTmA8zG6pbCbFSbqUo77J98HyqGTS9isLW4g1hZMXnvibWHD/AGqVa2aoZTKRuEq3kcQDTvD7LaTE5j31J4fDtoEJkDv+uljivkZ5KOYLBLSm6sxOo3DuMdgp+lnfHqE690jdRULJtc+NdahSdDFwR3WOldUYJLY55Tb5OlCiRl43ndbdasw52WSl/DyZBbXHYcyZ91auhEcAOyfqrNueFHWwihpleE+LZ+uujDBKaZz5Z+yZ5tUElKd4abA/aT0g/jr0bgWDkSFSFAC0mdOAUfsKwnC4YPY7DtxAUrCJUANyWm0qtJsQknx3aVv7bIToAOwVbKrolB7tiacLclRJnwAHACdfrpVlhCRYe8+2lEtdg8b0o21Gnfv+0VNQXYMpPuJttjckfV3WpdLfGlEoo4FOoEpTEwj7XoBIB01Gvdu9dB1zKJCSrSwibmN5Hf4UeKNLyFtgAop9fbRstdArabNYVI46+qhRooUdJjAkYYkxT5rZkxcnwPtqWQiSeqIPYO/fupVBIgxu4Hhe9eY5yfB6yjFDJnZoGqZ9fqinqME2n83zAHkPdSod3Eer+lKBY+TJ3nS9ZJmtB2wBpOu6nCV9vmabIV2U4bc7D9vGnURHIXSvu9dOEL7B7aQQub5Y8qcocNrey1USEchwhR4R2RSyVns8v6U2Qs7hThBI4eZ+qqIRi6D9oNZ7zwOEowzcal1U77BCfLrHyrQ0KV2A77n6r1nfORgH3cQ0EtLWkNgApSpQzqWqQVAWMZNarj5I5OCP5FNof2sXROVCFupGnWyJaIA4ArUR2AVsSRWV82yOj2g82BbI6kE69RxMeoVrSZpp8iJ7HEp7KVmuEngPP+lJ5jNwI3Qf9qW6F5Fc9Ar7/ImkelPyT3yn666Ht0H/AE/XR1moUKhv9lcDydcwiuZ+w+VF6YcCP2VfVQ1e81HRjG/7RH+IfXRk4hG5SfMUQvDtPZQCkkXAHYYra37jaRYODcQaFNwlP6PqoVtcjaUZkhY+UPCLG3iN16UQu/pQe/eL+dBQ4wALxuGs92tF+Ft6dK3AmOuI11HqriUT0NQ4aNo3Wn7R2mnCEdndupliQhaSnpABZSj+iJvfQTF+FcadCzAebVMWC7qIyGAAdOoT+15soitkkgW4nju8qWQgkgdw+31VE4hCWxCnQn9ZZSCbiReYuCBp3U6K0pbCulEFUhRXlSqSSE5gerbhwp0hWySbgdUQTa1u2DHnTtsHhULh3G1BSUvIUpWQSFiSUgAxCpv76cutFI6zmVPoyVGwOYAQVQZzJuTNu6GQGS6R/valQkTE3jvtfy31APYdYkqUEpiJU4oSSU5RcwIykAi5njqu7gHCmy1JVbRR0BcIGYySBnHfl3bnqhLJoQNPZ66rXKfOpxtTbqkRwUoCJnQGPGnr6yFwlSScgCpICoBMKyjjPZUSNmOKVmKgqIIBJ1ylJ7hJHHSklkpUgqF7se8ksI22447cuLzSo3JlUq8yPVVzS/NU/CbMIUgpXGQR29b8ISRoSkg99GxHxacrmKQlRzRnc6OM/oqACpJBKoGkEDcKWM33NPGmW1TsXJgeFFD6JjOmeBInjprUHiWwEpUt9ASpZUCtxQSZXnGXrQrqgJjQRPGXa3mnFno3mipTakDKtJMqNjY1XdkmkiXB3Tfh30HHEpupQSNTJA7N9QisCpYUW3vzzJQv9NxWUqExHSC36O7c4GH6QKWFJWrMAlQVYBuQBmEwqSsmx9IiKaxWiWmuTUKjZzhJPTGCjJCTlSClIQQEpHV6wJkGQTG6jIwqlOZ0PkpSpQUlKpCTnUopIvKoUkGSIyjwFgomBQBqPwSw2koW4kqQCpUrkpRJIUom8RvMCgdr4b/qGv8ANR9dazUSQNCiJUNQR3zQo2KZntBUNOTJPRqAiIFjM/K76rWysRhi20heFdWopQlSujJSokCTM3BO/hVucYBQtIVqhQJA3KBEwdYn7WpLB4Xomm0ZgrK2lM2BOUBM5ZMaVGLVHZZC7YIzYpA/Nwhix/SEdmhqJxCcMtlLbLChiCG8ig2UnMCCV5uFjfSrJjcAFrdUF/hGQ0Rl0gqM2PWHWFraUMTgCtLWVeRbWUJVlJEAAEETcGONUiK5pCO0syHHFuMfCW1ZcoAzKSMoBTlIM3BO7dS2wWsE82tLbJy9JmU04D8W5liybhNuHbwt1/Zr+cuM4hTcgAoU30iLb0i2Wn+wdlFrpFOLU466rMtZRlByiEgJGgApq2Br2GfJXZzUvnoxKMQ6lFvQCSCAOAFSHLNsqwZBtLjKbcFOpEjtvT7Yuyui6Xr5uleW76BTl6Qg5dTMRrbupztnZfTtdHnCOu0uYn8GtK4iRrETumhqSYN27KdtPHLTh3cE+fjmXWMp/tWS8gIcTxiyT9c1ojqR2+uoLlPybbxnRLzhtxpYUlQGaUzJQRItIF5t4mpJAcDjiluZm1ZejQEgFFjmlU9YExrpFByTQaIZInaLgOnwVo+JdXUi9CEqcUQEpBUok7gJJ8IqO2rsF9eIL7GK6EltLSgWkuzlUpUyVCPS4bq6jYmIWy4y/iulzlPWDSWyED0kAA3mNaGlMOoheRu0XPhKulUCMYFPNAKBKFIJT0Zjf0QQe5NSG0W1NLcViMGrGNKWVJUlPSKSg3CchEWvckeUU9e5JMy2tlCGXG1pWFpBPo+khQkSCCRSuK2PjA4tzD40tocMlt1sOpSYAlsyCkW9HSjSuzOVg5NYDZ+JwoDTQW0HVq6N2VFpw+kmCTlgHQWvvkmuch9ksdGtwNpzoxL6Uqi6Qh0hKRfQQI7qk+TWyBhW1pLhdcccU664U5c7i4khOgFhaltg7N+DoWjNnzOuuzlyx0iyvLqdJid9MTkyk8ncavBrD61E4XEYh5pz/wCF1Lqktrn5CgMpO6O4VNcmdoow+z3n1+i27ila6kOqgeJgeNSeE2AhOFcwjp6VDinVK6sfhVqc0kwUkiDxANqj9n8kQ3hGsItzpG0OlxfUy9IM2YIIzGBJv3bqzo1p8jXm+xjiFOYXELC3FBOKSQQbP3dRY6pdJn9ao7k3tI4XGYpbqylh9/EJBMQh1hRXf9ZtR7ygDcKsI5NsNvtPYdCWVtqVmypVDiFJIKCJHeDeOFKYnk026y4y4qUuPF0EAgpKlSQL65cwntoXbG2/cqGxVuOL2k+6SFYjBF4D5KFhwNJ/y0o86c8nsJhVt4dC9kOKKktpU8WkFBkAFwqzTlOsxVxd2GkuPOBQT0rAYjL6IGaDrBHWNoHfTFnYuNQ2ltGPCSkQkjDogJAgDKV7o40bAWhCYAAgACAOweNCk0mAAbmBJiJO8xQpBKM/Fj4e6gLiuUKMeBpCqKdMpoUKIo7TTppOlChQYUOsgToIoz2h8PfQoVGXJdDT6vfToIEC26hQp1wI+QyhcVxO+hQp1wK+TidaWKyNDFChQMKIWbX4+2lUm/nQoVkBibizIvQXQoUTHEmlG9KFCsYVOlcrlCsAFChQrBP/2Q=='
      )
    ];


  }

}
